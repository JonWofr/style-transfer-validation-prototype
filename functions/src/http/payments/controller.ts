import * as express from 'express';
import * as paypal from '@paypal/checkout-server-sdk';
import * as functions from 'firebase-functions';
import { PaypalOrdersCreateRequest } from '../../models/paypal-orders-create-request.model';
import { Item } from '../../models/item.model';
import * as admin from 'firebase-admin';
import { Product } from '../../models/product.model';
import { Order } from '../../models/order.model';
import { getCollectionConverter } from '../../utils/database-helper';
import { sendMail } from '../../utils/mail-helper';

const environment = new paypal.core.SandboxEnvironment(
  functions.config().paypal.client_id,
  functions.config().paypal.secret
);
const client = new paypal.core.PayPalHttpClient(environment);

const firestore = admin.firestore();

const productsCollection = firestore
  .collection('products')
  .withConverter(getCollectionConverter<Product>());
const ordersCollection = firestore
  .collection('orders')
  .withConverter(getCollectionConverter<Order>());

export const createOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log(functions.config().paypal.client_id);
    const { items } = req.body;
    const validatedItems = await validateItems(items);
    const body = parsePaypalOrdersCreateRequest(validatedItems);
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody(body);

    const response = await client.execute(request);
    res.status(200).json(response.result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// This method is used to counteract tampered client data. Prices and quantities of the items are validated.
const validateItems = async (items: Item[]) => {
  const validatedItems = await Promise.all(
    items.map(
      async (item): Promise<Item> => {
        const productDocument = await productsCollection
          .doc(item.product.id)
          .get();
        if (productDocument.exists === false) {
          throw new Error(`Product with id ${item.product.id} does not exist`);
        }
        if (item.quantity < 1) {
          throw new Error('The item quantity has to be greater than 0');
        }
        const product = productDocument.data()!;
        return {
          product,
          stylizedImage: item.stylizedImage,
          quantity: item.quantity,
        };
      }
    )
  );
  return validatedItems;
};

const parsePaypalOrdersCreateRequest = (
  validatedItems: Item[]
): PaypalOrdersCreateRequest => {
  let totalPrice = 0;
  const paypalItems: {
    name: string;
    unit_amount: {
      currency_code: 'EUR';
      value: string;
    };
    quantity: string;
  }[] = [];
  validatedItems.map((validatedItem) => {
    totalPrice += validatedItem.quantity * validatedItem.product.price;
    paypalItems.push({
      name: validatedItem.product.name,
      unit_amount: {
        currency_code: 'EUR',
        value: validatedItem.product.price.toString(),
      },
      quantity: validatedItem.quantity.toString(),
    });
  });
  const paypalOrdersCreateRequest: PaypalOrdersCreateRequest = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: totalPrice.toString(),
          breakdown: {
            item_total: {
              currency_code: 'EUR',
              value: totalPrice.toString(),
            },
          },
        },
        items: paypalItems,
      },
    ],
  };
  return paypalOrdersCreateRequest;
};

export const captureOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { orderId, items } = req.body;
    const validatedItems = await validateItems(items);
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});
    const response = await client.execute(request);
    const order: Order = {
      paypalOrdersCaptureResponse: response.result,
      items: validatedItems,
    };
    await ordersCollection.add(order);
    await sendConfirmationMail(response.result.payer.email_address);
    res.status(200).json(response.result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const sendConfirmationMail = async (recipient: string) => {
  const emailBody = `
    Thank you for your purchase
  `;
  await sendMail(recipient, 'Your purchase as PetAI', emailBody);
};

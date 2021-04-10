import * as express from 'express';
import * as paypal from '@paypal/checkout-server-sdk';
import * as functions from 'firebase-functions';
import { PurchaseUnit } from '../../models/purchase-unit.model';
import { Item } from '../../models/item.model';
import * as admin from 'firebase-admin';
import { Product } from '../../models/product.model';

const environment = new paypal.core.SandboxEnvironment(
  functions.config().paypal.publickey,
  functions.config().paypal.privatekey
);
const client = new paypal.core.PayPalHttpClient(environment);

const productsCollection = admin
  .firestore()
  .collection('products')
  .withConverter({
    toFirestore: (documentData: admin.firestore.DocumentData) =>
      documentData as admin.firestore.DocumentData,
    fromFirestore: (document: admin.firestore.QueryDocumentSnapshot) =>
      document.data() as Product,
  });

export const createOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { items } = req.body;
    const purchaseUnit = await parsePurchaseUnit(items);
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [purchaseUnit],
    });

    const response = await client.execute(request);
    res.status(200).json(response.result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const parsePurchaseUnit = async (items: Item[]): Promise<PurchaseUnit> => {
  let totalPrice = 0;
  const paypalItems: {
    name: string;
    unit_amount: {
      currency_code: 'EUR';
      value: string;
    };
    quantity: string;
  }[] = [];
  await Promise.all(
    items.map(async (item) => {
      // Following lines are necessary to use the price saved in the database rather than the price sent in the client request
      const productDocument = await productsCollection
        .doc(item.product.id)
        .get();
      if (productDocument.exists === false) {
        throw new Error(`Product with id ${item.product.id} does not exist`);
      }
      const product = productDocument.data()!;
      totalPrice += item.quantity * product.price;
      paypalItems.push({
        name: product.name,
        unit_amount: {
          currency_code: 'EUR',
          value: product.price.toString(),
        },
        quantity: item.quantity.toString(),
      });
    })
  );
  const purchaseUnit: PurchaseUnit = {
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
  };
  console.log(purchaseUnit);
  return purchaseUnit;
};

export const captureOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const orderID = req.body.orderID;
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});
    const response = await client.execute(request);
    console.log(response);
    res.status(200).json(response.result);
  } catch (err) {
    res.status(500).send(err);
  }
};

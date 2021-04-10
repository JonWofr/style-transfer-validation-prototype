import * as express from 'express';
import * as paypal from '@paypal/checkout-server-sdk';
import * as functions from 'firebase-functions';
import { PurchaseUnit } from '../../models/purchase-unit.model';

const environment = new paypal.core.SandboxEnvironment(
  functions.config().paypal.publickey,
  functions.config().paypal.privatekey
);
const client = new paypal.core.PayPalHttpClient(environment);

export const createOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const request = new paypal.orders.OrdersCreateRequest();
    const purchaseUnits: PurchaseUnit[] = [
      {
        amount: {
          currency_code: 'USD',
          value: '220.00',
        },
      },
    ];
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: purchaseUnits,
    });

    const response = await client.execute(request);
    res.status(200).json(response.result);
  } catch (err) {
    res.status(500).send(err);
  }
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

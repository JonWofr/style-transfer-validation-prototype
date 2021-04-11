export interface PaypalOrdersCreateRequest {
  intent: 'CAPTURE';
  purchase_units: {
    amount: {
      currency_code: 'EUR';
      value: string;
      breakdown: {
        item_total: {
          currency_code: 'EUR';
          value: string;
        };
      };
    };
    items: {
      name: string;
      unit_amount: {
        currency_code: 'EUR';
        value: string;
      };
      quantity: string;
      // category: 'DIGITAL_GOODS'
    }[];
    /*   application_context: {
    brand_name: string;
    locale: string;
    shipping_preferences: 'GET_FROM_FILE' | 'NO_SHIPPING';
    user_action: 'PAY_NOW';
    landing_page: 'NO_PREFERENCE';
  }; */
  }[];
}

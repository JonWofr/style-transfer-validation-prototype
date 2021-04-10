export interface PurchaseUnit {
  amount: {
    currency_code: string;
    value: string;
  };
  items?: [
    {
      name: string;
      unit_amount: {
        currency_code: string;
        value: string;
      };
      quantity: string;
    }
  ];
}

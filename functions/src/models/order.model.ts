import { Item } from './item.model';

export interface Order {
  paypalOrdersCaptureResponse: any;
  items: Item[];
}

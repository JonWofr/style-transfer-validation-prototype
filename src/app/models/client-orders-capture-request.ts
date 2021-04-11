import { Item } from './item.model';

export interface ClientOrdersCaptureRequest {
  orderId: string;
  items: Item[];
}

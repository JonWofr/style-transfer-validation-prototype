import { Item } from './item.model';

export interface ClientOrdersCreateRequest {
  items: Item[];
}

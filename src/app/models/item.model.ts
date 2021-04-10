import { Product } from './product.model';
import { StylizedImage } from './stylized-image.model';

export interface Item {
  product: Product;
  stylizedImage: StylizedImage;
  quantity: number;
}

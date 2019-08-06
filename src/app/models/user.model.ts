import { Product } from './product.model';

export interface User {
  id: string;
  username: string;
  created: Date;
  token?: string;
  bookmarks?: Product;
}

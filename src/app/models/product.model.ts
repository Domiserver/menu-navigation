import { User } from './user.model';

export interface Product {
  id: string;
  created: Date;
  updated: Date;
  idea: string;
  description: string;
  author: User;
  upvotes?: number;
  downvotes?: number;
}

export interface ProductDto {
  id?: string;
  idea: string;
  description: string;
}

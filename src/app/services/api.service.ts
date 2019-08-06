import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Product, ProductDto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = environment.api_server + '/api';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
      const url = `${this.api}/${endpoint}`;
      return this.http.request(method, url, {
        body,
        headers: { authorization: `Bearer ${this.auth.token}`}
      });
  }

  getUsers(page?: string): Observable<User[]> {
    const endpoint = page ? `users?page=${page}` : 'users';
    return this.request('GET', endpoint);
  }

  getUser(username: string): Observable<User> {
    return this.request('GET', `users/${username}`);
  }

  getProducts(page?: number): Observable<Product[]> {
    const endpoint = page ? `products?page=${page}` : 'products';
    return this.request('GET', endpoint);
  }

  getNewestProducts(page?: number): Observable<Product[]> {
    const endpoint = page ? `products/newest?page=${page}` : `products/newest`;
    return this.request('GET', endpoint);
  }

  getProduct(id: string): Observable<Product> {
    return this.request('GET', `products/${id}`);
  }

  createIdea(data: ProductDto): Observable<Product> {
    return this.request('POST', `products/`, data);
  }

  updateProduct(id: string, data: Partial<ProductDto>): Observable<Product> {
    return this.request('PUT', `products/${id}`, data);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.request('DELETE', `produts/${id}`);
  }

  upvoteProduct(id: string): Observable<Product> {
    return this.request('POST', `products/${id}/upvote`);
  }

  downvoteProduct(id: string): Observable<Product> {
    return this.request('POST', `products/${id}/downvote`);
  }

  bookmarkProduct(id: string): Observable<User> {
    return this.request('POST', `products/${id}/bookmark`);
  }

  unbookmarkProduct(id: string): Observable<User> {
    return this.request('DELETE', `ideas/${id}/bookmark`);
  }

  getCommentsByProduct(product: string, page?: string): Observable<Comment[]> {
    const endpoint = page
      ? `comments/product/${product}?page=${page}`
      : `comments/product/${product}`;
    return this.request('GET', endpoint);
  }

  getCommentsByUser(user: string, page?: string): Observable<Comment[]> {
    const endpoint = page
      ? `comments/user/${user}?page=${page}`
      : `comments/user/${user}`;
    return this.request('GET', endpoint);
  }

  getComment(id: string): Observable<Comment> {
    return this.request('GET', `comments/${id}`);
  }

  createComment(product: string, data): Observable<Comment> {
    return this.request('POST', `comments/product/${product}`, data);
  }

  deleteComment(id: string): Observable<Comment> {
    return this.request('DELETE', `comments/${id}`);
  }
}


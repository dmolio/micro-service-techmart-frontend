import { api } from './api';
import type { CartItem } from '../types';

export const cartService = {
  async getCart() {
    const { data } = await api.get<CartItem[]>('/cart');
    return data;
  },

  async addToCart(productId: string, quantity: number) {
    const { data } = await api.post('/cart/items', { productId, quantity });
    return data;
  },

  async updateQuantity(productId: string, quantity: number) {
    const { data } = await api.put(`/cart/items/${productId}`, { quantity });
    return data;
  },

  async removeFromCart(productId: string) {
    await api.delete(`/cart/items/${productId}`);
  },

  async clearCart() {
    await api.delete('/cart');
  }
};

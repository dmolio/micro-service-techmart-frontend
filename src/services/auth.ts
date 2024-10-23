import { api } from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export const authService = {
  async login(credentials: LoginCredentials) {
    const { data } = await api.post('/auth/login', credentials);
    localStorage.setItem('token', data.token);
    return data;
  },

  async logout() {
    localStorage.removeItem('token');
    await api.post('/auth/logout');
  },

  async getCurrentUser(): Promise<User> {
    const { data } = await api.get('/auth/me');
    return data;
  },

  async register(userData: LoginCredentials & { name: string }) {
    const { data } = await api.post('/auth/register', userData);
    localStorage.setItem('token', data.token);
    return data;
  }
};

import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';

// Create axios instance with default config
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    // Handle unauthorized errors (401)
    if (error.response?.status === 401) {
      // Only handle token expiration if we have a token and we're not trying to login
      const token = localStorage.getItem('token');
      const isLoginRequest = originalRequest?.url?.includes('/auth/login');
      
      if (token && !isLoginRequest) {
        // Clear user data
        localStorage.removeItem('token');
        
        // Show session expired message
        toast.error('Session expired. Please login again.');
        
        // Redirect to login page
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
          window.location.href = '/login';
        }
      }
    }

    // Handle forbidden errors (403)
    if (error.response?.status === 403) {
      toast.error('You do not have permission to perform this action');
    }

    // Handle not found errors (404)
    if (error.response?.status === 404) {
      toast.error('Resource not found');
    }

    // Handle server errors (500)
    if (error.response?.status === 500) {
      toast.error('An unexpected error occurred. Please try again later.');
    }

    // Handle network errors
    if (error.message === 'Network Error') {
      toast.error('Unable to connect to the server. Please check your internet connection.');
    }

    return Promise.reject(error);
  }
);
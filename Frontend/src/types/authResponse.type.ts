export interface AuthApiResponse {
  httpStatusCode: number;
  success: boolean;
  message: string;
  data: AuthResponse;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
export function datatypes(): string {
  return 'datatypes';
}

export interface UserResponse {
  name: string;
  age: number;
}

export interface createUserReq {
  email: string;
  name: string;
}

export interface ApiResponse<T> {
  message: string;
  status: number;
  data: T;
  error?: string;
}

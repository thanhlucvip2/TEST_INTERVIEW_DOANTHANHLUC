export interface ResponseModel<T> {
  timestamp: string;
  status: number;
  message: string;
  data: T;
}

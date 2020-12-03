export interface IUser {
  _id: string;
  email: string;
  username: string;
  password: string;
  isAdmin: boolean;
  favouriteProducts?: string[];
  token: string;
}
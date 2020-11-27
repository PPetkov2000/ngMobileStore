import { IReview } from './review';

export interface IProduct {
  name: string;
  brand: string;
  imageUrl: string;
  OS: string;
  memory: number;
  RAM: number;
  network: string;
  SIM: string;
  price: number;
  size: number;
  weight: number;
  color: string;
  releaseDate: string;
  reviews: [IReview];
  rating: number;
  countInStock: number;
  creator: string;
}
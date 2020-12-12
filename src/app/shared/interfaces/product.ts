export interface IProduct {
  _id: string;
  name: string;
  images: string[];
  brand: string;
  price: number;
  cpu: string;
  camera: string;
  size: string;
  weight: string;
  display: string;
  battery: string;
  memory: string;
  description: string;
  countInStock: number;
  quantity?: number;
  rating: number;
  reviews: [];
}
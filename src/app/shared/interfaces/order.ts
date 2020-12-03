export interface IOrder {
  creator: string;
  orderItems: { name: string, image: string, price: number, quantity: number, product: string}[];
  shippingAddress: { address: string, city: string, postalCode: string, country: string};
  paymentMethod: string;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  paymentResult?: { id: string, status: string, update_time: string, email_address: string};
  isPaid: boolean;
  paidAt?: string;
}
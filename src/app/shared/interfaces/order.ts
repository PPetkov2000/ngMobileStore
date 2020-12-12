export interface IOrder {
  _id?: string;
  creator?: string | object;
  orderItems: { name: string, imageUrl: string, price: number, quantity: number, product: string }[];
  shippingAddress: { address: string, city: string, postalCode: string, country: string };
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  paymentResult?: { id: string, status: string, update_time: string, email_address: string };
  isPaid?: boolean;
  paidAt?: string;
}
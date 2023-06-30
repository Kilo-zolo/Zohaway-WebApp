import { CartItem } from '../context/ShoppingCartContext';

export type OrderUserType = {
  ID: string;
  first: string;
  last: string;
  pnum: number;
  email: string;
  pass: string;
  member: number;
};

type OrderType = {
  cost: number;
  user: OrderUserType;
  order: CartItem[];
};

export async function placeOrder(cost: number, obj: OrderUserType, cartItems: CartItem[]): Promise<any> {
  if (cost === 0) {
    return 0;
  }

  const currentOrder: OrderType = {
    cost: cost,
    user: obj,
    order: cartItems,
  };

  try {
    const response = await fetch('https://zohaway-functions.azurewebsites.net/api/PlaceOrder', {
      method: 'POST',
      body: JSON.stringify(currentOrder),
    });
    const responseData = await response.text(); // Get the response data as text
    return responseData; // Return the response data
  } catch (error) {
    console.error(error);
    return "500";
  }
}

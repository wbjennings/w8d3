import { v4 as uuidv4 } from 'uuid';
import { Item, User } from './types';

export function createUser(name: string, age: number): User {
  return {
    id: uuidv4(),
    name,
    age,
    cart: [],
  };
};

export function createItem(name: string, price: number, description: string): Item {
  return {
    id: uuidv4(),
    name,
    price,
    description,
  };
};

export function addToCart(item: Item, user: User): void {
  user.cart.push(item);
};

export function removeFromCart(item: Item, user: User): void {
  user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
};

export function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
  const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
  if (index !== -1) {
    user.cart[index].quantity -= quantity;
    if (user.cart[index].quantity <= 0) {
      user.cart.splice(index, 1);
    }
  }
};

export function cartTotal(user: User): number {
  return user.cart.reduce((total, item) => total + item.price, 0);
};

export function printCart(user: User): void {
  console.log('Cart Contents:');
  user.cart.forEach((item) => {
    console.log(`- ${item.name} (${item.price})`);
  });
};

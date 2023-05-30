import { createUser, createItem, addToCart, removeFromCart, removeQuantityFromCart, cartTotal, printCart } from './functions';

// This is creating the user john Doe
const user = createUser('John Doe', 30);

// Now I create 3 items for the cart
const itemA = createItem('Item A', 10, 'Description for Item A');
const itemB = createItem('Item B', 20, 'Description for Item B');
const itemC = createItem('Item C', 30, 'Description for Item C');

// Now creating function to add to the card
addToCart(itemA, user);
console.log('User\'s Cart after adding Item A:');
printCart(user);
console.log('Total:', cartTotal(user));

// Add 3 items from item B 
for (let i = 0; i < 3; i++) {
  addToCart(itemB, user);
}
console.log('User\'s Cart after adding 3 Item B:');
printCart(user);
console.log('Total:', cartTotal(user));

// Add 3 Item C to the user's Cart
for (let i = 0; i < 3; i++) {
  addToCart(itemC, user);
}
console.log('User\'s Cart after adding 3 Item C:');
printCart(user);
console.log('Total:', cartTotal(user));

// Remove all of Item B from the user's Cart
removeFromCart(itemB, user);
console.log('User\'s Cart after removing Item B:');
printCart(user);
console.log('Total:', cartTotal(user));

// Remove 2 of Item C from the user's Cart
removeQuantityFromCart(itemC, user, 2);
console.log('User\'s Cart after removing 2 instances of Item C:');
printCart(user);
console.log('Total:', cartTotal(user));


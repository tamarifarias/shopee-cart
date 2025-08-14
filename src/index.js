import * as cartService from './services/cart.js';
import createItem from "./services/item.js";

const myCart = [];
const myWishlist = [];

console.log('Welcome to the your shopee cart!');

const item1 = await createItem('hotwheels ferrari', 20.99, 1);
const item2 = await createItem('hotwheels lamborghini', 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2)

//remove item by index
//await cartService.removeItem(myCart, 1);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, 'hotwheels ferrari');
// await cartService.deleteItem(myCart, 'hotwheels lamborghini');



await cartService.calculateTotal(myCart);

;
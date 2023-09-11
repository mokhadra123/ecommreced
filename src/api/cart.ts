import { ICart, ProductType, cartType } from "../../types";

export default class Cart implements ICart {
  addToCart(prodcut: ProductType): boolean {
    const cart = this.getCart();
    if (cart.products.findIndex((item) => item.id === prodcut.id) > -1) {
      cart.products.push({
        id: prodcut.id,
        name: prodcut.name,
        price: prodcut.price,
      });
      cart.totalPrice = cart.totalPrice + prodcut.price;
      localStorage.setItem("cart", JSON.stringify(cart));
      return true;
    } else {
      return false;
    }
  }
  removeFromCart(id: number): boolean {
    const cart = this.getCart();
    const productIndex = cart.products.findIndex((item) => item.id === id);
    if (productIndex > -1) {
      cart.products.filter((item) => item.id !== id);
      cart.totalPrice = cart.totalPrice - cart.products[productIndex].price;
      localStorage.setItem("cart", JSON.stringify(cart));
      return true;
    } else {
      return false;
    }
  }
  getCart(): cartType {
    return JSON.parse(localStorage.getItem("cart") as string);
  }
}

export interface ProductType {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface IProduct {
  getAllProducts(): ProductType[];

  getProduct(id: number): ProductType | undefined;

  createProduct(prodcut: ProductType): void;

  removeProduct(id: number): void;
}

////////////////////////////////////////////////

export interface UserType {
  email: string;
  password: string;
  admin: boolean;
}

export interface IUser {
  login(user: UserType): boolean;
  signUp(user: UserType): boolean;
  getUsers(): UserType[];
}

///////////////////////////////////

export interface cartType {
  products: {
    id: ProductType["id"];
    name: ProductType["name"];
    price: ProductType["price"];
  }[];
  totalPrice: number;
}

export interface ICart {
  addToCart(prodcut: ProductType): boolean;
  removeFromCart(id: ProductType["id"]): boolean;
  getCart(): cartType;
}

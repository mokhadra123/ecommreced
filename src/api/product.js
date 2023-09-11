import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  const getAllProducts = () => {
    return products;
  };

  const getProduct = (id) => {
    return products.find((prod) => prod.id === id);
  };

  const createProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prod) => prod.id !== id)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        getAllProducts,
        getProduct,
        createProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

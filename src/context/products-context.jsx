import React, { useState } from "react";

const INITIAL_PRODUCTS = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export const ProductsContext = React.createContext({
  products: [],
  toggleItem: (id) => {},
});

const ProductsContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(INITIAL_PRODUCTS);

  const toggleItem = (id) => {
    setProductsList((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          return { ...product, isFavorite: !product.isFavorite };
        }
        return product;
      });
    });
  };

  const productsValue = {
    products: productsList,
    toggleItem: toggleItem,
  };

  return (
    <ProductsContext.Provider value={productsValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

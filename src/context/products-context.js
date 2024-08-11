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
  products: INITIAL_PRODUCTS,
});

const ProductsContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(INITIAL_PRODUCTS);

  const productsValue = {
    products: productsList,
  };

  return (
    <ProductsContext.Provider value={productsValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

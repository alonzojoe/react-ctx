import React, { useContext } from "react";
import { ProductsContext } from "../context/products-context";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  const productsCtx = useContext(ProductsContext);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (productsCtx.length > 0) {
    content = (
      <ul className="products-list">
        {productsCtx.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;

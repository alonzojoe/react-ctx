import { initStore } from "./store";

const DEFAULT_PRODUCTS = [
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

const configureStore = () => {
  const actions = {
    TOGGLE_FAVORITE: (currState, id) => {
      const updatedProducts = currState.products.map((product) => {
        if (product.id === id) {
          return { ...product, isFavorite: !product.isFavorite };
        }
        return product;
      });

      return { products: updatedProducts };
    },
  };

  initStore(actions, {
    products: DEFAULT_PRODUCTS,
  });
};

export default configureStore;

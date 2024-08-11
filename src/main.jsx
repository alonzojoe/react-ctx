import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import productReducer from "./store/reducers/products.js";
import "./index.css";

const rootReducer = combineReducers({
  shop: productReducer,
});

const store = createStore(rootReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

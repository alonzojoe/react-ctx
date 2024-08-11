import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./context/products-context.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ProductsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContextProvider>
);

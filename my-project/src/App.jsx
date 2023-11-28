import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navigation from "./Components/Navigation/Navigation";
import { Home } from "./Components/Home/Home";
import { Cart } from "./Components/Cart/Cart";
import { Products } from "./Components/Products/Products";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";
import { Product } from "./Components/Sp-Product/Product";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product" element={<Product />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

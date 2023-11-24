import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navigation from "./Components/Navigation/Navigation";
import { Home } from "./Components/Home/Home";
import { Cart } from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

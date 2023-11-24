import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Navigation = () => {
  return(
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
  )
};
export default Navigation;

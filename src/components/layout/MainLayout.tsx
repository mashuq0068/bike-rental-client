import { Outlet } from "react-router-dom";
import Navbar from "../Navabar/Navabar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../utils/ScrollTop";

const MainLayout = () => {
  return (
    <div className="">
         <ScrollToTop />
      <div className="sticky z-50 top-0">
        <Navbar />
      </div>
      <div className="bg-white">
      <Outlet />
      </div>
      <div className="bg-white pt-16">
      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../Navabar/Navabar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <div className="sticky z-50 top-0">
        <Navbar />
      </div>
      <Outlet />
      <div className="bg-white pt-16">
      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../Navabar/Navabar";

const MainLayout = () => {
  return (
    <div className="">
      <div className="sticky z-50 top-0">
      <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;

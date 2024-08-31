import { Outlet } from "react-router-dom";
import MenuItems from "./MenuItems";

const DashboardLayout = () => {
  return (
    <div className="lg:flex">
      <MenuItems />
      <div className="lg:w-[70%] justify-self-end mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

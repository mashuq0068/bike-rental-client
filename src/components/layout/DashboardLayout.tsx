import { Outlet } from "react-router-dom";
import MenuItems from "./MenuItems";

const DashboardLayout = () => {
  return (
    <div className="lg:flex">
      <MenuItems />
      <div className="outlet-dashboard-width lg:mt-0 mt-[14vh]  justify-self-end ml-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

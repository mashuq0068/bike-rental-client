import { Outlet } from "react-router-dom";
import Navbar from "../Navabar/Navabar";


const MainLayout = () => {
    return (
        <div className="">
           <Navbar/>
           <Outlet/>
        </div>
    );
};

export default MainLayout;
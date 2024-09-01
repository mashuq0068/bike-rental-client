import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import DashboardLayout from "../components/layout/DashboardLayout";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import BikeManagement from "../pages/Dashboard/Admin/BikeManagement";
import UserManagement from "../pages/Dashboard/Admin/UserManagement";
import BikeReturn from "../pages/Dashboard/Admin/BikeReturn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      // dashboard
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      // admin routes
      {
        path: "/dashboard/admin/profile",
        element: <AdminProfile />,
      },
      {
        path: "/dashboard/admin/bike-management",
        element: <BikeManagement />,
      },
      {
        path: "/dashboard/admin/user-management",
        element: <UserManagement />,
      },
      {
        path: "/dashboard/admin/return-bike",
        element: <BikeReturn />,
      },
    ],
  },
]);
export default router;

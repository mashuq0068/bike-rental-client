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
import CouponManagement from "../pages/Dashboard/Admin/CouponManagement";
import UserProfile from "../pages/Dashboard/User/UserProfile";
import UserBikeManagement from "../pages/Dashboard/User/UserBikeMangement";
import BikeDetails from "../pages/Dashboard/User/BikeDetails";
import MyRental from "../pages/Dashboard/User/MyRental";

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
      {
        path: "/dashboard/admin/coupon-management",
        element: <CouponManagement />,
      },
      // user routes
      {
        path: "/dashboard/user/profile",
        element: <UserProfile />,
      },
      {
        path: "/dashboard/user/bike-management",
        element: <UserBikeManagement />,
      },
      {
        path: "/dashboard/user/bike-details/:id",
        element: <BikeDetails />,
      },
      {
        path: "/dashboard/user/my-rental",
        element: <MyRental/>,
      },
    ],
  },
]);
export default router;

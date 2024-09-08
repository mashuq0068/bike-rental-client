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
import ContactUs from "../components/Home/ContactUs";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AdvancePayment from "../pages/Dashboard/User/AdvancePayment";
import Payment from "../pages/Dashboard/User/Payment";

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
      {
        path: "contact-us",
        element: <ContactUs />,
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
        element: (
          <ProtectedRoute access="admin">
            <AdminProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/admin/bike-management",
        element: (
          <ProtectedRoute access="admin">
            <BikeManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/admin/user-management",
        element: (
          <ProtectedRoute access="admin">
            <UserManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/admin/return-bike",
        element: (
          <ProtectedRoute access="admin">
            <BikeReturn />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/admin/coupon-management",
        element: (
          <ProtectedRoute access="admin">
            <CouponManagement />
          </ProtectedRoute>
        ),
      },
      // user routes
      {
        path: "/dashboard/user/profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user/bike-management",
        element: <UserBikeManagement />,
      },
      {
        path: "/dashboard/user/bike-details/:id",
        element: (
          <ProtectedRoute>
            <BikeDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user/my-rental",
        element: (
          <ProtectedRoute>
            <MyRental />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user/advance-payment/:id/:startTime",
        element: (
          <ProtectedRoute>
            <AdvancePayment />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user/payment/:id",
        element: (
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
export default router;

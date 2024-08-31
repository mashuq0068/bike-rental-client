import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import DashboardLayout from "../components/layout/DashboardLayout";


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
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    // children : [
    //   {
    //      path:'/dashboard',
    //      element:<Contact/>
    //   }
    // ]
  },
]);
export default router;

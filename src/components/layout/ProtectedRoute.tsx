import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const ProtectedRoute = ({
  access = "user",
  children,
}: {
  access?: string;
  children: React.ReactElement;
}) => {
  const user = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  // If the user is logged in
  if (user?.role) {
    // If the user is an admin, allow all access
    if (user.role === "admin") {
      return <>{children}</>;
    }

    // If the user is a standard user
    if (user.role === "user") {
      // Allow access if the route is for users
      if (access === "user") {
        return <>{children}</>;
      }

      // Navigate home if trying to access an admin route
      if (access === "admin") {
        navigate("/");
        return null;
      }
    }
  } else {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login"></Navigate>;
    // return null;
  }

  // Return null by default if no conditions match
  // return null;
};

export default ProtectedRoute;

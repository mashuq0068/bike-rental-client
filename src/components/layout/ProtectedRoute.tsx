import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const ProtectedRoute = ({
  access = "user",
  children,
}: {
  access: string;
  children: React.ReactNode;
}) => {
  const user = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  //   if user logged in
  if (user?.role) {
    // if user is admin he will get all access
    if (user?.role === "admin") {
      return <div>{children}</div>;
    }
    // if user is an user, then he can only access user routes
    if (user?.role === "user") {
      // if access is for user , so user can access children
      if (access === "user") {
        return <div>{children}</div>;
      }
      //   if access is for admin then as an user he will be navigated in home
      else if (access === "admin") {
        return navigate("/");
      }
    }
  }
  //   if user not logged in
  else {
    navigate("/login");
  }
};

export default ProtectedRoute;

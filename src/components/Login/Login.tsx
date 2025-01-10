import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { openSuccessNotification } from "../../utils/successNotification";
import { openErrorNotification } from "../../utils/errorNotification";
import { Spin } from "antd";
import Cookies from "js-cookie";
import { IUser, setUser } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

export interface LoginData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const [tooltipVisible, setTooltipVisible] = useState(true);



  const onSubmit = async (data: LoginData) => {
    const res = await login(data);
    if (res?.data?.success) {
      openSuccessNotification("You logged in successfully");
      Cookies.set("token", res.data.token, { expires: 7 });
      const { name, email, role } = res?.data?.data ?? { name: null, email: null, role: null };
      const user: IUser = { name, email, role };
      dispatch(setUser(user));
      if (location.state) {
        navigate(location.state);
      } else {
        navigate("/");
      }
    } else if (res?.error) {
      openErrorNotification("Invalid email or password given");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="bg-white justify-center items-center rounded-lg mx-auto p-4 mt-8 flex">
          {/* Left Side Image */}
          <div className="hidden lg:block max-w-[500px] w-full">
            <img
              src="/images/login (2).png"
              alt="Sign Up"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="w-full bg-white rounded-lg shadow-md max-w-[400px] p-8 relative">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-500">Login</h2>
            
            {/* Tooltip */}
            {tooltipVisible && (
              <div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm p-3 rounded shadow-lg z-10">
                <p>
                  <strong>Admin:</strong> email:admin123@gmail.com / pass: admin123
                </p>
                <p>
                  <strong>User:</strong> email:user123@gmail.com / pass: user123
                </p>
                <button
                  onClick={() => setTooltipVisible(false)}
                  className="absolute top-1 right-2 text-white bg-transparent"
                >
                  &times;
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter your email"
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters long" },
                  })}
                  placeholder="Enter your password"
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all duration-300"
              >
                {isLoading ? <Spin className="custom-button-spin" /> : "Login"}
              </button>
              <p className="text-center mt-5">
                New to the website?{" "}
                <Link className="text-red-500 font-bold" to="/sign-up">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="container">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto p-4 mt-8  w-full https://i.ibb.co/rMDhzg2/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-passwo.jpg flex">
          {/* Left Side Image */}
          <div className="hidden lg:block lg:w-3/4">
            <img
              src="https://i.ibb.co/rMDhzg2/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-passwo.jpg" // Replace with your image URL
              alt="Sign Up"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-500">
              Login
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  placeholder="Enter your email"
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  placeholder="Enter your password"
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all duration-300"
              >
                Login
              </button>
              <div>
                <p className="text-center mt-5">
                  {" "}
                  New to the website? Go for{" "}
                  <Link className="text-red-500 font-bold" to="/sign-up">
                    sign-up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

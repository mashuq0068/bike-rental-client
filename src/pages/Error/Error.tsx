import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold tracking-widest text-red-500">
          404
        </h1>
        <div className="bg-red-500 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <p className="text-2xl md:text-3xl font-light mb-8 mt-4">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="relative inline-block text-sm font-medium text-red-500 group focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-red-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-gray-900 border border-current">
            Go Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Error;

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">

      <h1 className="text-7xl font-bold text-red-500">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4 text-gray-800 dark:text-white">
        Page Not Found
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-md">
        Oops! The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;
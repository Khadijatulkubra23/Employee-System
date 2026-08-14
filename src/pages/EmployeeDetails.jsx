import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function EmployeeDetails() {
  const { id } = useParams();

  const employees = useSelector((state) => state.employees);

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Employee Not Found
        </h1>

        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 underline mt-4 inline-block"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

      <h1 className="text-3xl font-bold text-center mt-5 text-gray-800 dark:text-white">
        {employee.name}
      </h1>

      <div className="mt-8 space-y-5">

        {/* Position */}
        <div>
          <p className="text-gray-500 dark:text-gray-400">
            Position
          </p>

          <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
            {employee.position}
          </p>
        </div>

        {/* Department */}
        <div>
          <p className="text-gray-500 dark:text-gray-400">
            Department
          </p>

          <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
            {employee.department}
          </p>
        </div>

        {/* Email */}
        <div>
          <p className="text-gray-500 dark:text-gray-400">
            Email
          </p>

          <p className="text-lg font-medium text-gray-800 dark:text-gray-100 break-words">
            {employee.email}
          </p>
        </div>

      </div>

      <Link
        to="/"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        ← Back to Home
      </Link>

    </div>
  );
}

export default EmployeeDetails;
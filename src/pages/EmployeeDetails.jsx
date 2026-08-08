import { useParams, Link } from "react-router-dom";
function EmployeeDetails({ employees }) {
  const { id } = useParams();
  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );
  if (!employee) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">
          Employee Not Found
        </h1>
        <Link
          to="/"
          className="text-blue-600 underline mt-4 inline-block"
        >
          Go Back
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-center">
      </div>
      <h1 className="text-3xl font-bold text-center mt-5">
        {employee.name}
      </h1>
      <div className="mt-8 space-y-5">
        <div>
          <p className="text-gray-500">Position</p>
          <p className="text-lg font-medium">
            {employee.position}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Department</p>
          <p className="text-lg font-medium">
            {employee.department}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Email</p>
          <p className="text-lg font-medium break-words">
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
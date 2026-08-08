import { Link } from "react-router-dom";
function EmployeeCard({ employee, deleteEmployee }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">
      <div className="flex justify-center mb-5">
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-800">
        {employee.name}
      </h2>
      <p className="text-center text-blue-600 font-medium mt-1">
        {employee.position}
      </p>
      <div className="mt-6 space-y-2 text-gray-600">
        <p>
          🏢 {employee.department}
        </p>
        <p className="break-words">
          📧 {employee.email}
        </p>
      </div>
      <div className="flex justify-between mt-8">
        <Link
          to={`/employee/${employee.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          View
        </Link>
        <Link
          to={`/edit/${employee.id}`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteEmployee(employee.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default EmployeeCard;
import { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "../components/EmployeeCard";
function Home({ employees, setEmployees }) {
  const [searchTerm, setSearchTerm] = useState("");
  const totalEmployees = employees.length;
  const totalDepartments = [
    ...new Set(employees.map((employee) => employee.department)),
  ].length;
  function deleteEmployee(id) {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );
    setEmployees(updatedEmployees);
  }
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Employee Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Manage employees, update records, and keep everything organized.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">
            Total Employees
          </p>
          <h2 className="text-4xl font-bold text-blue-600 mt-2">
            {totalEmployees}
          </h2>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">
            Departments
          </p>
          <h2 className="text-4xl font-bold text-green-600 mt-2">
            {totalDepartments}
          </h2>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-2/3 border p-3 rounded-lg"
        />
        <Link
          to="/add"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Employee
        </Link>
      </div>
      <h2 className="text-2xl font-bold mb-6">
        Employee List
      </h2>
      <div className="grid grid-cols-1- md-grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
                <EmployeeCard 
                key={employee.id} employee={employee} deleteEmployee={deleteEmployee} />
            ))
        ) : (
            <div className="col-span-full bg-white rounded-2xl shadow p-10 text-center">
                <h2 className="text-2xl font-bold text-gray-700"> No Employees Found </h2>
                <p className="text-gray-500 mt-2"> Try searching with a different name or add a new employee. </p>
                <Link to="/add" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"> Add Employee </Link>
            </div>
        )}
      </div>
    </div>
  );
}
export default Home;
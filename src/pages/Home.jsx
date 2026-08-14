import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee as deleteEmployeeAction } from "../redux/employeeSlice";
import { Link } from "react-router-dom";
import EmployeeCard from "../components/EmployeeCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");

  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const totalEmployees = employees.length;

  const totalDepartments = [
    ...new Set(employees.map((employee) => employee.department)),
  ].length;

  const departments = [
    ...new Set(employees.map((employee) => employee.department)),
  ];

  function handleDelete(id) {
    dispatch(deleteEmployeeAction(id));
  }

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      departmentFilter === "All" ||
      employee.department === departmentFilter;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Employee Dashboard
        </h1>

        <p className="text-gray-500 dark:text-gray-300 mt-2">
          Manage employees, update records, and keep everything organized.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <p className="text-gray-500 dark:text-gray-300 text-sm">
            Total Employees
          </p>

          <h2 className="text-4xl font-bold text-blue-600 mt-2">
            {totalEmployees}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <p className="text-gray-500 dark:text-gray-300 text-sm">
            Departments
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-2">
            {totalDepartments}
          </h2>
        </div>

      </div>

      {/* Search / Filter / Add */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">

        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Departments</option>

          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>

        <Link
          to="/add"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
        >
          Add Employee
        </Link>

      </div>

      {/* Employee List */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Employee List
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              deleteEmployee={handleDelete}
            />
          ))
        ) : (
          <div className="col-span-full bg-white dark:bg-gray-800 rounded-2xl shadow p-10 text-center">

            <h2 className="text-2xl font-bold text-gray-700 dark:text-white">
              No Employees Found
            </h2>

            <p className="text-gray-500 dark:text-gray-300 mt-2">
              Try searching with a different name or add a new employee.
            </p>

            <Link
              to="/add"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Add Employee
            </Link>

          </div>
        )}

      </div>
    </div>
  );
}

export default Home;
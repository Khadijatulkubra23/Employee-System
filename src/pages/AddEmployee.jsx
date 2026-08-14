import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addEmployee } from "../redux/employeeSlice";

function AddEmployee() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  function onSubmit(data) {
    const newEmployee = {
      id: Date.now(),
      name: data.name.trim(),
      position: data.position.trim(),
      department: data.department.trim(),
      email: data.email.trim(),
    };

    dispatch(addEmployee(newEmployee));

    navigate("/");
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Add Employee
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Employee Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Employee Name
          </label>

          <input
            type="text"
            {...register("name", {
              required: "Employee name is required.",
            })}
            ref={(e) => {
              register("name").ref(e);
              nameInputRef.current = e;
            }}
            placeholder="Enter employee name"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Position
          </label>

          <input
            type="text"
            {...register("position", {
              required: "Position is required.",
            })}
            placeholder="Enter position"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.position && (
            <p className="text-red-500 text-sm mt-1">
              {errors.position.message}
            </p>
          )}
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Department
          </label>

          <input
            type="text"
            {...register("department", {
              required: "Department is required.",
            })}
            placeholder="Enter department"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.department && (
            <p className="text-red-500 text-sm mt-1">
              {errors.department.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Email
          </label>

          <input
            type="text"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address.",
              },
            })}
            placeholder="Enter email"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Add Employee
        </button>

      </form>
    </div>
  );
}

export default AddEmployee;
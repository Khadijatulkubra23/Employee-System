import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateEmployee } from "../redux/employeeSlice";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.employees);

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (employee) {
      reset({
        name: employee.name,
        position: employee.position,
        department: employee.department,
        email: employee.email,
      });
    }
  }, [employee, reset]);

  function onSubmit(data) {
    const updatedEmployee = {
      ...employee,
      name: data.name.trim(),
      position: data.position.trim(),
      department: data.department.trim(),
      email: data.email.trim(),
    };

    dispatch(updateEmployee(updatedEmployee));
    navigate("/");
  }

  if (!employee) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Employee Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Edit Employee
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
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition"
        >
          Update Employee
        </button>

      </form>
    </div>
  );
}

export default EditEmployee;
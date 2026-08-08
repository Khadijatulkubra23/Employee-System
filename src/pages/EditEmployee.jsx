import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function EditEmployee({ employees, setEmployees }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );
  useEffect(() => {
  if (employee) {
    setName(employee.name);
    setPosition(employee.position);
    setDepartment(employee.department);
    setEmail(employee.email);
  }
}, [employee]);
function handleSubmit(e) {
  e.preventDefault();
  const updatedEmployees = employees.map((emp) => {
    if (emp.id === Number(id)) {
      return {
        ...emp, name, position, department, email,
      };
    }
    return emp;
  });
  setEmployees(updatedEmployees);
  navigate("/");
}
return (
  <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
    <h1 className="text-3xl font-bold mb-6">
      Edit Employee
    </h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded-lg"
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full border p-3 rounded-lg"
      />
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="w-full border p-3 rounded-lg"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-3 rounded-lg"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white px-6 py-3 rounded-lg"
      >
        Update Employee
      </button>
    </form>
  </div>
);
}
export default EditEmployee;
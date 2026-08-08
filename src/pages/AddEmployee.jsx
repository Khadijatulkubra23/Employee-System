import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
function AddEmployee({ employees, setEmployees }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const nameInputRef = useRef(null);
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);
  function handleSubmit(e) {
  e.preventDefault();
  const newEmployee = {
    id: Date.now(),
    name,
    position,
    department,
    email,
  };
  setEmployees([...employees, newEmployee]);
  navigate("/");
}
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">
        Add Employee
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Employee Name
            </label>
            <input
            ref={nameInputRef} type="text" value={name}
            onChange={(e) => setName(e.target.value)} placeholder="Enter employee name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position
                </label>
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)}
                placeholder="Enter position"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required /> 
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2"> Department </label>
              <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Enter department"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2"> Email </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition" > Add Employee </button> 
                </form>
                </div>
                );
              }
export default AddEmployee;
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EmployeeDetails from "./pages/EmployeeDetails";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import NotFound from "./pages/NotFound";
import mockEmployees from "./data/employees";
function App() {
  const [employees, setEmployees] = useState(mockEmployees);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home employees={employees} setEmployees={setEmployees} />}/>
        <Route path="/employee/:id" element={<EmployeeDetails employees={employees} />} />
        <Route path="/add" element={<AddEmployee employees={employees} setEmployees={setEmployees} />} />
        <Route path="/edit/:id" element={<EditEmployee employees={employees} setEmployees={setEmployees} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
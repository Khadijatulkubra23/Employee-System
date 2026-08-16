import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EmployeeDetails from "./pages/EmployeeDetails";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import NotFound from "./pages/NotFound";
import { useTheme } from "./context/ThemeContext";
function App() {
  const { darkMode } = useTheme();
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "dark bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/employee/:id"
          element={<EmployeeDetails />}
        />
        <Route
          path="/add"
          element={<AddEmployee />}
        />
        <Route
          path="/edit/:id"
          element={<EditEmployee />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
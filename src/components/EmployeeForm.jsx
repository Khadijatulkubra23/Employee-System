function EmployeeCard({ employee }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <h2 className="text-xl font-bold">
        {employee.name}
      </h2>

      <p>{employee.position}</p>

      <p>{employee.department}</p>

      <p>{employee.email}</p>
    </div>
  );
}

export default EmployeeCard;
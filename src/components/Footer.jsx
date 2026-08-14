function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">
            EmployeeHub
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Employee Management System
          </p>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} EmployeeHub. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
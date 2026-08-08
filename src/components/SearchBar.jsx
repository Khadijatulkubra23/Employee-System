function SearchBar() {
    return (
        <div className="w-full max-w-xl">
            <input type="text" placeholder="Search employees.." 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    );
}
export default SearchBar;
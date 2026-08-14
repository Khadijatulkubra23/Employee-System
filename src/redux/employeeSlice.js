import { createSlice } from "@reduxjs/toolkit";
import mockEmployees from "../data/employees";
const employeeSlice = createSlice({
  name: "employees",
  initialState: mockEmployees,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      return state.filter(
        (employee) => employee.id !== action.payload
      );
    },
    updateEmployee: (state, action) => {
      const index = state.findIndex(
        (employee) => employee.id === action.payload.id
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});
export const {
  addEmployee,
  deleteEmployee,
  updateEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
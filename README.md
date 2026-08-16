# Employee Management System

A responsive Employee Management System built using React, Tailwind CSS, Context API, Redux Toolkit, and React Hook Form.

## Features

### Employee Management 
- View all employees
- Add new employees
- Edit employee information
- Delete employees
- View individual employee details
- Search employees by name
- Filter employees by department
- Display total employees
- Display total departments

### Authentication
- Manage authentication state
- Login and logout functionality
- Display logged-in user information
- Manage authentication using Context API

### State Management
- Local state for component-specific UI state
- Context API for authentication and theme preferences
- Redux Toolkit for centralized employee data
- Search and filter state
- Centralized employee actions and reducers

### Theme
- Light and dark theme support
- Theme preference managed using Context API
- Responsive styling for both themes

### Forms
- Add employee form
- Edit employee form
- Controlled form handling
- Form validation
- Form error messages
- Email validation
- React Hook Form integration

### Other Features
- Responsive Design
- 404 Not Found page
- Client-side routing with React Router
- Reuseable React components
- Responsive navigation bar
- Footer
- Employee Dashboard

## Technologies Used
- React
- JavaScript
- React Router
- Tailwind CSS
- COntext API
- Redux Toolkit
- React Hook Form
- Vite
- HTML5
- CSS3

## State Management
Different types of state are managed using different approaches depending on where the state is needed.

## Local State
Local state is used for component-specific data such as:
- Search input
- Department filters
- UI-specific values

This keeps simple state close to the components that uses it.

### Context API
Context API is used for application-wide state that needs to be accessed by multiple components.

Examples include:
- Authentication state
- Logged-in user
- Theme preference

This avoid unnecessary prop drilling.

### Redux Toolkit
Redux Toolkit is used for employee data because it is shared across multiple pages and components.

Employee state includes actions for:
- Adding employees
- Updating employees
- Deleting employees
- Accessing employee data

### React Hook Form
React Hook Form is used for employee forms and handles:

- Form values
- Form submission
- Validation
- Error messages

A detailed explanation of the state-management decisions can be found in:

`STATE_DECISION_NOTE.md`

## Installation

1. Clone the Repository

```bash
git clone https://github.com/Khadijatulkubra23/Employee-System.git 
```
2. Navigate to the Project

```bash
cd Employee-system
```
3. Install Dependencies

```bash
npm install
```

4. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```
http://localhost:5173
```
# State Decision Note

## Overview

In the Employee Management System, I used different state-management approaches depending on how widely the data needed to be shared.

## 1. Local State

I used local state for UI-specific data that is only needed by a single component.

Examples:
- Search input state
- Department filter state
- Form input state
- Form validation and error states

For example, the Home page manages the search and department filter because these values are only needed to control the employee list displayed on that page.

I used local state because there was no need to make these values available throughout the application.

## 2. Context API

I used Context API for authentication and theme preferences.

Examples:
- Logged-in user
- Login/logout state
- Dark/light theme preference

Authentication and theme information can be needed by multiple components, such as the Navbar and other parts of the application.

Context avoids passing these values through multiple components using props.

I chose Context because these values are shared across the application but do not require the more advanced state-management features of Redux.

## 3. Redux Toolkit

I used Redux Toolkit to manage employee data.

The Redux store contains the employee data, while the employee slice contains reducers and actions for modifying that data.

Examples:
- Add employee
- Update employee
- Delete employee
- Access employee data from different pages

I chose Redux Toolkit because employee data is shared across multiple pages and components. Using Redux provides a centralized and predictable way to manage this shared state.

## 4. Why I Did Not Use Redux for Everything

I did not put every piece of state into Redux.

Simple UI state such as search text, filters, and form values is easier to manage locally.

Using Redux for small component-specific values would add unnecessary complexity.

Similarly, Context is useful for authentication and theme preferences, but using it for frequently changing employee data would not provide the same structure and scalability as Redux Toolkit.

## State Management Summary

| State | Solution | Reason |
|------|----------|--------|
| Search text | Local State | Only needed by Home |
| Department filter | Local State | Only controls Home's employee list |
| Form values | Local State / React Hook Form | Specific to the form |
| Form errors | React Hook Form | Specific to the form |
| Authentication | Context API | Shared across the application |
| Theme preference | Context API | Shared across the application |
| Employee data | Redux Toolkit | Shared across multiple pages |

## Conclusion

I chose the state-management solution based on how widely the state was needed.

Local state is used for component-specific data, Context is used for application-wide preferences and authentication, and Redux Toolkit is used for centralized employee data.

This approach keeps the application organized while avoiding unnecessary complexity.
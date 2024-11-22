# CEMARS-PROJECT-WITH-RBAC-FUNCTIONALITY (Role-Based Access Control)


![App Screenshot](https://cdn-images-1.medium.com/max/1600/1*QlkpHjL9Cn-kiQXap1sweA.jpeg)

[**Live Demo**](https://umair-khanzada.github.io/role-based-access-control/)

## Description

This project demonstrates a role-based access control (RBAC) implementation in React.js. It dynamically generates routes and components based on the current user's role, improving efficiency and user experience. 

## Roles Implemented

### Admin
- **Blog Posting**
  - Add, edit, delete blogs.
- **User Analytics Dashboard**
  - View analytics of registered users.

### Customer
- **Event Registration**
  - Register for events dynamically.
- **Blog Viewing**
  - View blogs with "Read More" functionality.

## Benefits

- Routes generated only once, reducing unnecessary checks.
- Centralized configuration for roles and routes.
- Easy to add/remove roles or modify their access.
- Supports both single and multiple roles for users.
- Synchronization between routes and navigation links.

## Features
- Fully dynamic routes and navigation.
- CRUD operations for blogs, events, and users.
- Authentication context for role-based handling.
- Separate UI components for each role.

## Future Enhancements
- Extend role-based control to individual components.
- Enhance UI with animations and transitions.
- Add support for real-time notifications.

## Installation
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the app: `npm start`.
4. Start the backend server for API handling.

## TODO
- Extend CRUD functionality to all components.
- Add user role editing functionality.
- Create detailed analytics for admin dashboards.

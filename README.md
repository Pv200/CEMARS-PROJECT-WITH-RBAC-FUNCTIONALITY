# CEMARS-PROJECT-WITH-RBAC-FUNCTIONALITY (Role-Based Access Control)

## Description

This project demonstrates a role-based access control (RBAC) implementation in React.js. It dynamically generates routes and components based on the current user's role, improving efficiency and user experience. 

## Demo

-Demo Video Link ::: https://www.loom.com/share/36bf99f658a2474798c98295328158d4?sid=b52bf5c7-acde-481e-9aa0-d21354ce225e

-Landing Page and Login Page
![image](https://github.com/user-attachments/assets/cd686487-ef31-4164-b7ba-58e855e5dae9)
![image](https://github.com/user-attachments/assets/953f9c5e-6c4c-4905-bbfb-0bb0b06f25d8)

-For Customer Role :-
![image](https://github.com/user-attachments/assets/0a98389f-e124-4ea5-b0b1-cee615ca8dab)
![image](https://github.com/user-attachments/assets/a8cec102-1a94-4b07-9d22-119b806803d8)
![image](https://github.com/user-attachments/assets/17b4ccf1-ecab-4543-ae3d-2bb5d851cac0)

-For Admin Role :-
![image](https://github.com/user-attachments/assets/b3e416f8-6066-452f-a15a-fa2018dee62d)
![image](https://github.com/user-attachments/assets/a8594f61-85b9-443e-a70c-f1f9d04bd002)
![image](https://github.com/user-attachments/assets/91178f9a-c017-4ae5-95bd-027c906c7f6c)
![image](https://github.com/user-attachments/assets/15065832-381d-4496-98c7-2702e7920a59)


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

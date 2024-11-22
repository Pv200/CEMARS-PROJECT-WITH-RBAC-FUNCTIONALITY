# CEMARS-PROJECT-WITH-RBAC-FUNCTIONALITY (Role-Based Access Control in React.js)

## Description

This project demonstrates a role-based access control (RBAC) implementation in React.js. It dynamically generates routes and components based on the current user's role, improving efficiency and user experience. 

## Demo 
-Demo Video Link :::: https://www.loom.com/share/36bf99f658a2474798c98295328158d4?sid=4cd51ea8-12f7-4652-8ae2-78f3bf79f930

-Landing Page and Login page 
![image](https://github.com/user-attachments/assets/a40342a8-a1a3-45d3-9474-8039033cf595)
![image](https://github.com/user-attachments/assets/4350cc73-dc93-4924-bcc5-33598d8b5301)

-For customer role :-
![image](https://github.com/user-attachments/assets/5852d62e-7753-4964-9bd7-b924dc225ee9)
![image](https://github.com/user-attachments/assets/e6921297-e97b-4469-b94a-97e08727042a)
![image](https://github.com/user-attachments/assets/415221e1-e7ab-402b-b1fa-9dbc44e7f039)

-For Admin role :-
![image](https://github.com/user-attachments/assets/8837b555-260a-4a5b-8d7e-95d9bedc9c83)
![image](https://github.com/user-attachments/assets/8217ca51-2ca7-4fc4-a686-c701a81d2088)

-Database Part {MYSQL WORKBENCH} :::
![image](https://github.com/user-attachments/assets/acea210a-0a53-4295-a32a-76cd4f2df59d)

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

## Installation
### Requirements
-Node.js (v14+)
-npm or yarn
-MySQL
-Git
-Steps
1. Clone the Repository
    ```bash

    git clone https://github.com/your-username/your-repository-name.git

Navigate to the project directory:
    ```bash

    cd your-repository-name
2. Set Up the Backend
   
  Go to the backend folder:
    ```bash

    cd backend
3. Install dependencies:
    ```bash

    npm install

-Update MySQL database credentials in server.js or config.js:
    Javacript code
    {
        host: 'localhost',
        user: 'your-mysql-username',
        password: 'your-mysql-password',
        database: 'your-database-name'
    }


-Start the backend server:
    ```bash

    node server.js
4. Set Up the Frontend
  -Go to the frontend folder:
    ```bash

    cd frontend
-Install dependencies:
    ```bash

    npm install
-Start the React app:
    ```bash
    
    npm start

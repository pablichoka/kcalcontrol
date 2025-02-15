# kCalControl Controller Module

## Overview
The Controller module in the kCalControl application is responsible for handling HTTP requests and responses. It acts as an intermediary between the client and the service layer, processing incoming requests, invoking business logic, and returning appropriate responses.

## Features
- Handles CRUD operations for various entities.
- Validates incoming request data.
- Manages session and authentication.
- Provides endpoints for user interaction.

## Endpoints

### User Controller
Handles user-related operations.

- **GET /users**: Retrieve a list of all users.
- **GET /users/{id}**: Retrieve details of a specific user by ID.
- **POST /users**: Create a new user.
- **PUT /users/{id}**: Update an existing user by ID.
- **DELETE /users/{id}**: Delete a user by ID.

### Meal Controller
Handles meal-related operations.

- **GET /meals**: Retrieve a list of all meals.
- **GET /meals/{id}**: Retrieve details of a specific meal by ID.
- **POST /meals**: Create a new meal.
- **PUT /meals/{id}**: Update an existing meal by ID.
- **DELETE /meals/{id}**: Delete a meal by ID.

### Authentication Controller
Handles authentication and authorization.

- **POST /auth/login**: Authenticate a user and return a token.
- **POST /auth/register**: Register a new user.
- **POST /auth/logout**: Log out the current user.

## Validation
The Controller module includes validation mechanisms to ensure that incoming data is correct and complete. This includes:
- Checking for required fields.
- Validating data formats (e.g., email, date).
- Ensuring data constraints (e.g., password length).

## Error Handling
The module provides comprehensive error handling to manage various error scenarios:
- Returning appropriate HTTP status codes.
- Providing meaningful error messages.
- Logging errors for further analysis.

## Dependencies
The Controller module depends on the following components:
- Service layer for business logic.
- Repository layer for data access.
- Security module for authentication and authorization.

## How to Run
To run the Controller module, follow these steps:
1. Ensure all dependencies are installed.
2. Configure the application properties.
3. Start the application using your preferred method (e.g., `mvn spring-boot:run`).

## Contribution
To contribute to the Controller module:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your branch.
4. Create a pull request for review.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

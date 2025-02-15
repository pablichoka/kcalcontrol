# kCalControl Module Models Documentation

## Overview
The `com.kCalControl.model` package contains the data models used in the kCalControl application. These models represent the core entities and their relationships within the system.

## Models

### User
Represents a user in the system.

#### Fields
- `id` (Long): Unique identifier for the user.
- `username` (String): Username of the user.
- `password` (String): Encrypted password of the user.
- `email` (String): Email address of the user.
- `roles` (Set<Role>): Roles assigned to the user.

#### Methods
- `getId()`: Returns the user's ID.
- `getUsername()`: Returns the user's username.
- `getPassword()`: Returns the user's password.
- `getEmail()`: Returns the user's email.
- `getRoles()`: Returns the user's roles.
- `setId(Long id)`: Sets the user's ID.
- `setUsername(String username)`: Sets the user's username.
- `setPassword(String password)`: Sets the user's password.
- `setEmail(String email)`: Sets the user's email.
- `setRoles(Set<Role> roles)`: Sets the user's roles.

### Role
Represents a role that can be assigned to a user.

#### Fields
- `id` (Long): Unique identifier for the role.
- `name` (String): Name of the role.

#### Methods
- `getId()`: Returns the role's ID.
- `getName()`: Returns the role's name.
- `setId(Long id)`: Sets the role's ID.
- `setName(String name)`: Sets the role's name.

### FoodItem
Represents a food item that can be tracked in the system.

#### Fields
- `id` (Long): Unique identifier for the food item.
- `name` (String): Name of the food item.
- `calories` (int): Caloric content of the food item.
- `user` (User): User who added the food item.

#### Methods
- `getId()`: Returns the food item's ID.
- `getName()`: Returns the food item's name.
- `getCalories()`: Returns the food item's calories.
- `getUser()`: Returns the user who added the food item.
- `setId(Long id)`: Sets the food item's ID.
- `setName(String name)`: Sets the food item's name.
- `setCalories(int calories)`: Sets the food item's calories.
- `setUser(User user)`: Sets the user who added the food item.

### Meal
Represents a meal consisting of multiple food items.

#### Fields
- `id` (Long): Unique identifier for the meal.
- `name` (String): Name of the meal.
- `foodItems` (List<FoodItem>): List of food items in the meal.
- `user` (User): User who created the meal.

#### Methods
- `getId()`: Returns the meal's ID.
- `getName()`: Returns the meal's name.
- `getFoodItems()`: Returns the list of food items in the meal.
- `getUser()`: Returns the user who created the meal.
- `setId(Long id)`: Sets the meal's ID.
- `setName(String name)`: Sets the meal's name.
- `setFoodItems(List<FoodItem> foodItems)`: Sets the list of food items in the meal.
- `setUser(User user)`: Sets the user who created the meal.

### DailyLog
Represents a daily log of meals and their total caloric intake.

#### Fields
- `id` (Long): Unique identifier for the daily log.
- `date` (LocalDate): Date of the log.
- `meals` (List<Meal>): List of meals logged for the day.
- `totalCalories` (int): Total caloric intake for the day.
- `user` (User): User who created the daily log.

#### Methods
- `getId()`: Returns the daily log's ID.
- `getDate()`: Returns the date of the log.
- `getMeals()`: Returns the list of meals logged for the day.
- `getTotalCalories()`: Returns the total caloric intake for the day.
- `getUser()`: Returns the user who created the daily log.
- `setId(Long id)`: Sets the daily log's ID.
- `setDate(LocalDate date)`: Sets the date of the log.
- `setMeals(List<Meal> meals)`: Sets the list of meals logged for the day.
- `setTotalCalories(int totalCalories)`: Sets the total caloric intake for the day.
- `setUser(User user)`: Sets the user who created the daily log.

## Source Code
The source code for the `com.kCalControl.model` package can be found [here](../src/main/java/com/kCalControl/model).
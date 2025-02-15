# Repository Module

This module contains the repository interfaces that interact with the database.

## Interfaces

### IngredientRepository

- **Description**: Repository for the `Ingredient` entity.
- **Methods**:
  - `Optional<Ingredient> findById(Integer id)`: Finds an ingredient by its ID.
  - `Page<Ingredient> findAll(PageRequest pageRequest)`: Retrieves all ingredients with pagination.
  - `Page<Ingredient> findByTypeIgnoreCaseOrCategoryIgnoreCaseOrDescriptionLikeIgnoreCase(String type, String category, String description, PageRequest pageRequest)`: Searches for ingredients by type, category, or description.

### VitaminsRepository

- **Description**: Repository for the `Vitamins` entity.
- **Methods**:
  - `Optional<Vitamins> findById(Integer id)`: Finds vitamins by their ID.

### NutrientsRepository

- **Description**: Repository for the `Nutrients` entity.
- **Methods**:
  - `Optional<Nutrients> findById(Integer id)`: Finds nutrients by their ID.

### MineralsRepository

- **Description**: Repository for the `Minerals` entity.
- **Methods**:
  - `Optional<Minerals> findById(Integer id)`: Finds minerals by their ID.

### UserRepository

- **Description**: Repository for the `User` entity.
- **Methods**:
  - `Optional<User> findById(Integer id)`: Finds a user by their ID.
  - `Optional<User> findByUsername(String username)`: Finds a user by their username.
  - `Page<User> findAll(PageRequest pageRequest)`: Retrieves all users with pagination.

### BMDataRepository

- **Description**: Repository for the `BMData` entity.
- **Methods**:
  - `Optional<BMData> findById(Integer id)`: Finds BMData by its ID.
  - `Optional<BMData> findByUserId(Integer userId)`: Finds BMData by user ID.

### AssetsRepository

- **Description**: Repository for the `Assets` entity.
- **Methods**:
  - `Optional<Assets> findById(Integer id)`: Finds assets by their ID.

### RoleRepository

- **Description**: Repository for the `Role` entity.
- **Methods**:
  - `Optional<Role> findById(Integer id)`: Finds a role by its ID.
  - `Optional<Role> findByName(String name)`: Finds a role by its name.

### PermissionRepository

- **Description**: Repository for the `Permission` entity.
- **Methods**:
  - `Optional<Permission> findById(Integer id)`: Finds a permission by its ID.
  - `Optional<Permission> findByName(String name)`: Finds a permission by its name.

### UserRoleRepository

- **Description**: Repository for the `UserRole` entity.
- **Methods**:
  - `Optional<UserRole> findById(Integer id)`: Finds a user role by its ID.
  - `List<UserRole> findByUserId(Integer userId)`: Finds user roles by user ID.

## Links

- [Source Code](../src/main/java/com/kCalControl/repository)
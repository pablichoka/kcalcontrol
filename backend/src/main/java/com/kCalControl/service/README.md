# Service Module

This module contains the service classes that implement the business logic of the application.

## Classes

### IngredientServiceImpl

- **Description**: Implementation of the ingredient service.
- **Methods**:
  - `addTypeToIngredient(String type, Ingredient ingredient)`: Adds a type to an ingredient.
  - `convertIngredientOld2Ingredient(IngredientsOld ingredientsOld)`: Converts an old ingredient to a new format.
  - `getIngredient(int page, int pageSize)`: Retrieves a page of ingredients.
  - `getIngredientsFromSearch(SearchParamsDTO dto)`: Searches for ingredients based on search parameters.
  - `getNutrientsFromIngredient(Integer id)`: Retrieves the nutrients of an ingredient.
  - `getVitaminsFromIngredient(Integer id)`: Retrieves the vitamins of an ingredient.
  - `getMineralsFromIngredient(Integer id)`: Retrieves the minerals of an ingredient.

### BMDataServiceImpl

- **Description**: Implementation of the BMData service.
- **Methods**:
  - `returnBMDataByUserDBId(Integer id)`: Retrieves BMData by user database ID.
  - `saveData(Integer id, UpdatePersonalDataDTO personalDataDTO)`: Saves personal data.
  - `saveCalc(Integer id, UpdateBMDataDTO dto)`: Saves calculated BMData.
  - `calculateBaseBM(BMData bmData)`: Calculates the base BM.
  - `calculateFinalBM(BMData bmData, String dietType, Integer numDaysEx)`: Calculates the final BM.

### UserServiceImpl

- **Description**: Implementation of the user service.
- **Methods**:
  - `newUser(NewUserDTO dto)`: Creates a new user.
  - `newCredentials(NewUserDTO dto)`: Creates new credentials for a user.
  - `returnUserById(Integer id)`: Retrieves a user by ID.
  - `getUsers(int page, int pageSize, String sort, String query, String searchBy)`: Retrieves users based on search criteria.

### AssetsServiceImpl

- **Description**: Implementation of the assets service.
- **Methods**:
  - `returnAssets(Assets assets)`: Retrieves asset details.

### WhoAmI

- **Description**: Service to get information about the current user.
- **Methods**:
  - `Optional<User> currentUser()`: Retrieves the current user.

## Links

- [Source Code](../src/main/java/com/kCalControl/service/impl)
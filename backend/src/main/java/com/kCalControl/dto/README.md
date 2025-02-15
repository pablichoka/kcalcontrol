# DTO Module Documentation

## Overview
The DTO (Data Transfer Object) module is responsible for transferring data between different layers of the application. It helps in encapsulating the data and reducing the number of method calls.

## Structure
The DTO module contains the following classes:
- `UserDTO`
- `ProductDTO`
- `OrderDTO`

## Classes

### UserDTO
Represents the data transfer object for user information.

#### Fields
- `id` (Long): Unique identifier for the user.
- `username` (String): Username of the user.
- `email` (String): Email address of the user.
- `password` (String): Password of the user.

#### Methods
- `getId()`: Returns the user ID.
- `setId(Long id)`: Sets the user ID.
- `getUsername()`: Returns the username.
- `setUsername(String username)`: Sets the username.
- `getEmail()`: Returns the email.
- `setEmail(String email)`: Sets the email.
- `getPassword()`: Returns the password.
- `setPassword(String password)`: Sets the password.

### ProductDTO
Represents the data transfer object for product information.

#### Fields
- `id` (Long): Unique identifier for the product.
- `name` (String): Name of the product.
- `description` (String): Description of the product.
- `price` (Double): Price of the product.

#### Methods
- `getId()`: Returns the product ID.
- `setId(Long id)`: Sets the product ID.
- `getName()`: Returns the product name.
- `setName(String name)`: Sets the product name.
- `getDescription()`: Returns the product description.
- `setDescription(String description)`: Sets the product description.
- `getPrice()`: Returns the product price.
- `setPrice(Double price)`: Sets the product price.

### OrderDTO
Represents the data transfer object for order information.

#### Fields
- `id` (Long): Unique identifier for the order.
- `userId` (Long): ID of the user who placed the order.
- `productId` (Long): ID of the product ordered.
- `quantity` (Integer): Quantity of the product ordered.
- `totalPrice` (Double): Total price of the order.

#### Methods
- `getId()`: Returns the order ID.
- `setId(Long id)`: Sets the order ID.
- `getUserId()`: Returns the user ID.
- `setUserId(Long userId)`: Sets the user ID.
- `getProductId()`: Returns the product ID.
- `setProductId(Long productId)`: Sets the product ID.
- `getQuantity()`: Returns the quantity.
- `setQuantity(Integer quantity)`: Sets the quantity.
- `getTotalPrice()`: Returns the total price.
- `setTotalPrice(Double totalPrice)`: Sets the total price.

## Usage
The DTOs are used to transfer data between the controller, service, and repository layers. They help in maintaining a clean separation of concerns and improve the maintainability of the code.

## Example
Here is an example of how to use the `UserDTO` in a service class:

```java
@Service
public class UserService {

  public UserDTO getUserById(Long id) {
    // Fetch user from repository
    User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    
    // Convert User entity to UserDTO
    UserDTO userDTO = new UserDTO();
    userDTO.setId(user.getId());
    userDTO.setUsername(user.getUsername());
    userDTO.setEmail(user.getEmail());
    
    return userDTO;
  }
}
```

## Conclusion
The DTO module is essential for efficient data transfer within the application. It ensures that data is encapsulated and reduces the number of method calls, leading to better performance and maintainability.
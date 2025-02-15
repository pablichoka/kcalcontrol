# Configuration Module Documentation

## Overview
The `config` module in the `kCalControl` project is responsible for managing the application's configuration settings. This module ensures that the application is properly configured to run in different environments and provides necessary configuration for various components.

## Files and Their Functions

### `Checker.java`
- **Purpose**: Provides utility methods for checking user roles and existence.
- **Functions**:
  - `checkRoleAdmin()`: Checks if the current user has an admin role.
  - `checkUserExistsById(Integer id)`: Checks if a user exists by their ID.
  - `checkGrantedUser(Integer id)`: Checks if the current user is granted access based on their ID or admin role.

### `JwtFilter.java`
- **Purpose**: Filters incoming requests to validate JWT tokens.
- **Functions**:
  - `doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)`: Validates the JWT token and sets the authentication context.
  - `shouldNotFilter(HttpServletRequest request)`: Specifies paths that should not be filtered.
  - `extractTokenFromRequest(HttpServletRequest request)`: Extracts the JWT token from the request header.

### `SecurityConfig.java`
- **Purpose**: Handles security configurations.
- **Functions**:
  - `configure(HttpSecurity http)`: Configures authentication, authorization, and security filters.
  - `passwordEncoder()`: Provides a password encoder bean.

### `TokenManager.java`
- **Purpose**: Manages JWT token creation and validation.
- **Functions**:
  - `generateJwtToken(String subject, String roleName, Date expiryDate)`: Generates a JWT token.
  - `generateRefreshToken(String subject, String roleName, Date expiryDate)`: Generates a refresh token.
  - `parseToken(String token)`: Parses and retrieves claims from a JWT token.
  - `validateClaims(Claims claims)`: Validates if the token's claims have expired.
  - `getSubject(Claims claims)`: Retrieves the subject from the token's claims.

### `TokenRevocationService.java`
- **Purpose**: Manages token revocation and cleanup.
- **Functions**:
  - `revokeToken(String token)`: Revokes a JWT token.
  - `isTokenRevoked(String token)`: Checks if a token is revoked.
  - `cleanupExpiredTokens()`: Cleans up expired tokens from the revocation list.

### `UserDetailsServiceImpl.java`
- **Purpose**: Loads user-specific data for authentication.
- **Functions**:
  - `loadUserByUsername(String id)`: Loads user details by user ID.

## Usage
To modify the configuration settings, update the respective configuration files as needed. Ensure that any changes are tested in the appropriate environment to avoid configuration issues.

## Conclusion
The `config` module is essential for the proper functioning of the `kCalControl` application. It centralizes configuration management, making it easier to maintain and update settings across different environments.
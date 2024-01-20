# Project Title

Online Shopping App

## Description

This project is an online shopping app developed using React Native. The app features various screens including authentication, home screen with product categories, product details, shopping cart, and user account details. The project demonstrates the implementation of state management, navigation, and integrating external libraries.

## Screens

### Auth Screen

The authentication screen allows users to input their name, email, and phone number. Basic validation is implemented to ensure all fields are filled before submission.

### Home Screen

The home screen displays top mobile and TV brands using a horizontal scroll view. Each product is clickable, leading to the Product Detail Page.

### Product Detail Page

The product detail page provides detailed information about a selected product. Users can view specifications and add the product to their shopping cart.

### Shopping Cart

The shopping cart screen displays added products and allows users to review and proceed to checkout.

### Account Screen

The account screen shows the user's details, including name, email, and phone number. Users can also upload a profile picture.

## State Management

- The project utilizes React Hooks (useState) for managing local component state.
- Context API is employed for global state management, specifically for user details and shopping cart items.
- AsyncStorage is used to persist user authentication information.

## Libraries Used

- React Navigation: For navigating between different screens.
- Expo Image Picker: To handle image uploading for the user's profile picture.
- Other standard libraries for UI and functionality.

## Learning Experience

Throughout this project, I have gained practical experience in the following:

- Building a multi-screen React Native application.
- Implementing navigation using React Navigation.
- Managing state using React Hooks and Context API.
- Integrating third-party libraries for enhanced functionality.
- Handling user authentication and data persistence.

## Future Improvements

- Implementing a backend server for enhanced user authentication and data storage.
- Adding more features like product search, order history, and user preferences.
- Enhancing the UI/UX for a more polished appearance.

Feel free to explore the code, suggest improvements, or use this project as a starting point for your own React Native applications.

## License

This project is licensed under the [MIT License](LICENSE).


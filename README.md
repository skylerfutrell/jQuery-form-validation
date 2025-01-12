jQuery Form Validation Web App

Created by Skyler Futrell 

Project Overview:
This project is a simple web application that demonstrates how to use the jQuery Validation plugin to validate form fields in real-time.
The form includes fields for user first name, last name, email, password, ZIP code, age group, and comments.
The application ensures that all required fields are correctly filled out before submission, providing users with clear error messages when necessary.

Features:
  - Client-Side Validation: Real-time validation of form fields using the jQuery Validation plugin.
  - Custom Error Messages: Friendly and descriptive error messages for each input field.
  - Responsive Design: Styled with CSS to ensure the form looks good on various devices.

Files:
1. index.html
  - Contains the structure of the web application, including the form and its fields.
2. styles.css
  - Defines the styling for the web application, including layout, fonts, colors, and form design.
3. script.js
  - Implements the validation logic using the jQuery Validation plugin.

Form Fields and Validation Rules:
The form includes the following fields:
First Name- Required field.
Last Name- Required field.
Email- Required field. Must follow a valid email format.
Password- Required field. Must be at least 15 characters long.
ZIP Code- Required field. Must be exactly 5 digits long. Only numeric values allowed.
Age Group- Required field. Dropdown selection with predefined options.
Comments- Optional field for user feedback.

Getting Started: 

  Prerequisites:
  - A modern web browser.
  - A local or online server to host the files (optional for testing).

  Installation:
  - Download or clone the repository to your local machine.
  - Ensure the following files are present in the project directory:
      - index.html
      - styles.css
      - script.js

  Usage:
  - Open index.html in a web browser.
  - Fill out the form fields.
  - Observe real-time validation and error messages for incorrect or missing input.
  - Submit the form (submission behavior is simulated as the action attribute is #).

Technologies Used:
  - HTML5: Markup for the structure of the web application.
  - CSS3: Styling and layout.
  - jQuery: JavaScript library for DOM manipulation and event handling.
  - jQuery Validation Plugin: Used for client-side form validation.

Customization:
To add or modify form fields, edit the index.html file.
To change validation rules or messages, edit the script.js file.
To update styles, edit the styles.css file.

Screenshots:

![Mobile Form Design](/images/mobile-form-view.jpg) 
![Mobile Form Edit](/images/mobile-form-edit.jpg) 
![Mobile Form Error](/images/mobile-error.jpg)

![Desktop Form Design](/images/desktop-form-view.jpg) 
![Desktop Form Edit](/images/desktop-form-edit.jpg)
![Desktop Form Error](/images/desktop-error.jpg)

License:
This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it.
Copyright (c) [2024] [Skyler Futrell]

Acknowledgments:
[jQuery Validation Plugin Documentation](https://jqueryvalidation.org/)


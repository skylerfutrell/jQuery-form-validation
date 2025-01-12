// https://jqueryvalidation.org

// Wait for the DOM
$(function () {
    // Initialize form validation on the registration form.
    $("form[name='signup']").validate({
      // Specify validation rules
      rules: {
        // First Name
        userfirstname: "required",
        // Last Name
        userlastname: "required",
        // Email
        useremail: {
          required: true,
          email: true
        },
        // Password
        userpassword: {
          required: true,
          minlength: 15
        },
        // ZIP Code
        userzip: {
          required: true,
          minlength: 5,
          maxlength: 5,
          digits: true
        },
        // Age Dropdown
        age: {
          required: true
        }
      },
      // Specify validation error messages
      messages: {
        userfirstname: "Enter your first name.",
        userlastname: "Enter your last name.",
        userpassword: {
          required: "Create a password.",
          minlength: "Your password must be at least 15 characters in length."
        },
        useremail: "Enter a valid email address.",
        userzip: {
          required: "Enter your ZIP code.",
          minlength: "ZIP code must be 5 digits.",
          maxlength: "ZIP code must be 5 digits.",
          digits: "Only numbers are allowed."
        },
        age: "Select your age group."
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function (form) {
        form.submit();
      }
    });
  });
  
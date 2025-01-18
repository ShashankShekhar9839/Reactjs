import React, { useState } from "react";
import * as yup from "yup";
import Input from "./Input";

//   copied code for validation

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  // Add other fields as needed
});

const Form = ({ formSchema }) => {
  const [formData, setFormData] = useState({});
  const [error, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form is valid", formData);
      // Proceed with form submission
    } catch (validationErrors) {
      const errorMessages = {};
      validationErrors.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });
      setErrors(errorMessages);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName": {
        setFormData((prev) => ({ ...prev, firstName: value }));
        break;
      }
      case "lastName": {
        setFormData((prev) => ({ ...prev, lastName: value }));
        break;
      }
      case "email": {
        setFormData((prev) => ({ ...prev, email: value }));
        break;
      }
      case "password": {
        setFormData((prev) => ({ ...prev, password: value }));
        break;
      }
      case "confirmPassword": {
        setFormData((prev) => ({ ...prev, confirmPassword: value }));
        break;
      }
      case "bio": {
        setFormData((prev) => ({ ...prev, bio: value }));
        break;
      }
      case "phoneNumber": {
        setFormData((prev) => ({ ...prev, phoneNumber: value }));
        break;
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {formSchema.map((item) => (
        <Input
          key={item.name}
          type={item.type}
          name={item.name}
          label={item.label}
          value={formData[item.name] || ""}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

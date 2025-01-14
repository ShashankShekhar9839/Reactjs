import * as yup from "yup";

const formSchema = [
  {
    component: "TEXT_FIELD",
    name: "firstName",
    label: "First Name",
    isRequired: true,
    validate: yup.string().required("First Name is required"),
    type: "text",
  },
  {
    component: "TEXT_FIELD",
    name: "lastName",
    label: "Last Name",
    isRequired: true,
    validate: yup.string().required("Last Name is required"),
    type: "text",
  },
  {
    component: "TEXT_FIELD",
    name: "email",
    label: "Email Address",
    isRequired: true,
    validate: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    type: "email",
  },
  {
    component: "PASSWORD_FIELD",
    name: "password",
    label: "Password",
    isRequired: true,
    validate: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    type: "password",
  },
  {
    component: "PASSWORD_FIELD",
    name: "confirmPassword",
    label: "Confirm Password",
    isRequired: true,
    validate: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    type: "password",
  },
  //   //   {
  //   //     component: "RADIO_GROUP",
  //   //     name: "gender",
  //   //     label: "Gender",
  //   //     options: [
  //   //       { label: "Male", value: "male" },
  //   //       { label: "Female", value: "female" },
  //   //       { label: "Other", value: "other" },
  //   //     ],
  //   //     isRequired: true,
  //   //     validate: yup.string().required("Gender is required"),
  //   //   },
  //   //   {
  //   //     component: "SELECT",
  //   //     name: "country",
  //   //     label: "Country",
  //   //     options: [
  //   //       { label: "Select a country", value: "" },
  //   //       { label: "United States", value: "us" },
  //   //       { label: "Canada", value: "ca" },
  //   //       { label: "India", value: "in" },
  //   //     ],
  //   //     isRequired: true,
  //   //     validate: yup.string().required("Country is required"),
  //   //   },
  //   //   {
  //   //     component: "CHECKBOX_GROUP",
  //   //     name: "hobbies",
  //   //     label: "Hobbies",
  //   //     options: [
  //   //       { label: "Reading", value: "reading" },
  //   //       { label: "Traveling", value: "traveling" },
  //   //       { label: "Cooking", value: "cooking" },
  //   //       { label: "Gaming", value: "gaming" },
  //   //     ],
  //   //     isRequired: true,
  //   //     validate: yup
  //   //       .array()
  //   //       .min(1, "Please select at least one hobby")
  //   //       .required("Hobbies are required"),
  //   //   },
  //   //   {
  //   //     component: "DATE_PICKER",
  //   //     name: "birthDate",
  //   //     label: "Date of Birth",
  //   //     isRequired: true,
  //   //     validate: yup.date().required("Date of Birth is required"),
  //   //   },
  {
    component: "TEXT_AREA",
    name: "bio",
    label: "Bio",
    isRequired: false,
    validate: yup.string().max(500, "Bio cannot exceed 500 characters"),
  },
  {
    component: "TEXT_FIELD",
    name: "phoneNumber",
    label: "Phone Number",
    isRequired: true,
    validate: yup
      .string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
    type: "tel",
  },
];

export default formSchema;

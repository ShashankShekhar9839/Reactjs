const reactQuestions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook. It allows developers to build reusable UI components and manage the state of applications efficiently.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks similar to HTML or XML. It is used with React to describe what the UI should look like. JSX code is compiled to JavaScript before being run in the browser.",
  },
  {
    id: 3,
    question: "What is a component in React?",
    answer:
      "A component in React is a self-contained, reusable piece of UI. Components can be class-based or function-based and are responsible for rendering part of the user interface based on data (props and state).",
  },
  {
    id: 4,
    question: "What is the difference between state and props in React?",
    answer:
      "Props are data passed from parent to child components and are read-only, whereas state is a local data storage that is managed within a component. State can change over time and re-render the component when updated.",
  },
  {
    id: 5,
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight representation of the actual DOM. React uses it to perform efficient updates by comparing changes (diffing) and only updating the parts of the DOM that have changed, improving performance.",
  },
  {
    id: 6,
    question: "What is a React Hook?",
    answer:
      "React Hooks are functions introduced in React 16.8 that allow developers to use state and other React features in function components. Examples include useState, useEffect, and useContext.",
  },
  {
    id: 7,
    question: "What is useState?",
    answer:
      "useState is a React Hook that allows you to add state to functional components. It returns an array with the current state and a function to update that state.",
  },
  {
    id: 8,
    question: "What is useEffect used for in React?",
    answer:
      "useEffect is a React Hook that allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default, but can be controlled with dependencies.",
  },
  {
    id: 9,
    question: "How does React handle form inputs?",
    answer:
      "React handles form inputs through controlled components. In controlled components, form input values are bound to state variables, which update when the user types, ensuring that the component state is always in sync with the UI.",
  },
  {
    id: 10,
    question: "What is the purpose of keys in React?",
    answer:
      "Keys are used in React to identify which items in a list have changed, are added, or removed. They help improve performance by giving elements a stable identity during updates, so React can re-render only the changed elements.",
  },
];

export default reactQuestions;

import React from "react";

// function MyComponent() {
//   return React.createElement(
//     "div",
//     { className: "container", "data-cy": "my-component" },
//     React.createElement("h1", null, "Hello, world!")
//   );
// }

const MyComponent = () => {
  return (
    <div className="container" data-cy="my-component">
      <h1>Hello, world!</h1>
    </div>
  );
};

export default MyComponent;

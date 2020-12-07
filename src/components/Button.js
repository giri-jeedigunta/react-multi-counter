import React from "react";

const buttonCSS = {
  fontWeight: "bold",
  fontSize: "24px",
  borderRadius: "50%",
  height: "30px",
  width: "30px",
  textAlign: "center",
  verticalAlign: "center",
  lineHeight: "24px",
  border: "1px solid #ddd"
};

const Button = ({
  label,
  name,
  action,
  customCount,
  counterUpdateEventHandler
}) => {
  return (
    <button
      style={buttonCSS}
      name={name}
      data-action={action}
      data-counter={customCount}
      onClick={(e) => counterUpdateEventHandler(e)}
    >
      {label}
    </button>
  );
};

export default Button;

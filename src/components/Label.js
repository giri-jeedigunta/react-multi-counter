import React from "react";

const labelCSS = {
  margin: 0,
  padding: "0 20px",
  fontWeight: "bold"
};

const Label = ({ name }) => {
  return <p style={labelCSS}>{name}</p>;
};

export default Label;

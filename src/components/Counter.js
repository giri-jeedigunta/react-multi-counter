import React, { useState } from "react";
import Button from "./Button";
import Label from "./Label";

const counterWrapper = {
  margin: "15px auto",
  padding: "10px",
  border: "1px dashed #aaa",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};

const counterNum = {
  margin: "0",
  padding: "0 20px",
  fontSize: "38px",
  textAlign: "center"
};

const Counter = ({ counterOptions }) => {
  const counterUpdateEventHandler = ({ target }) => {
    const action = target.dataset.action;
    const customCounter = parseInt(target.dataset.counter, 10);

    updateCounter((currentCount) =>
      action === "I"
        ? (currentCount += customCounter)
        : (currentCount -= customCounter)
    );
  };

  const [counter, updateCounter] = useState(counterOptions.currentCounter);

  return (
    <div style={counterWrapper}>
      <Label name={counterOptions.label}></Label>
      <Button
        label="-"
        name="decrementer"
        action="D"
        customCount={counterOptions.customIncrementer}
        counterUpdateEventHandler={counterUpdateEventHandler}
      />
      <h2 style={counterNum}>{counter}</h2>
      <Button
        label="+"
        name="incrementer"
        action="I"
        customCount={counterOptions.customDecrenmenter}
        counterUpdateEventHandler={counterUpdateEventHandler}
      />
    </div>
  );
};

export default Counter;

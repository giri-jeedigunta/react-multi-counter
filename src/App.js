import React from "react";
import "./styles.css";
import Counter from "././components/Counter";

export default function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter
        counterOptions={{
          customIncrementer: 1,
          customDecrenmenter: 1,
          currentCounter: 0,
          label: "Default Counter"
        }}
      />
      <Counter
        counterOptions={{
          customIncrementer: 5,
          customDecrenmenter: 5,
          currentCounter: 1,
          label: "My Counter"
        }}
      />
    </div>
  );
}

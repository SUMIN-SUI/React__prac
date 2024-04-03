import React from "react";
import useInput from "./useInput";

function displayMessage(message) {
  alert(message);
}

const App_custom = () => {
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);

  return (
    <div>
      <h1>useInput</h1>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} />
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default App_custom;

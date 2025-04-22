import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult(null);
      setError("Please enter integers.");
      return;
    }

    if (operation === "/" && n2 === 0) {
      setResult(null);
      setError("Cannot divide by zero");
      return;
    }

    let result;
    switch (operation) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "/":
        result = n1 / n2;
        break;
      default:
        result = null;
    }

    setResult(result);
  };

  useEffect(() => {
    if (result !== null) {
      console.log("Result changed:", result);
    }
  }, [result]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-500 rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Simple Calculator</h1>

      <form onSubmit={handleSubmit}>
        <div className="m-5">
          <input
          placeholder="First number"
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full p-2 border rounded-md font-semibold"/>
        </div>

        <div className="m-5">
          <input placeholder="Second number"
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full p-2 border  rounded-md  font-semibold"/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Operation</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full p-2 rounded-md">
            <option value="+">Add (+)</option>
            <option value="-">Subtract (−)</option>
            <option value="*">Multiply (×)</option>
            <option value="/">Divide (÷)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full  mt-5 bg-blue-400 text-white font-bold p-2 rounded-md hover:bg-blue-900">
          Calculate
        </button>
      </form>

      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

      {result !== null && !error && (
        <div className="mt-6 text-center text-lg">
          <span className="font-semibold">Answer:</span> {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;

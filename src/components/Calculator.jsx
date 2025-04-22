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
      setError("Please enter valid numbers.");
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
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-500 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">Calculator App</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium">First number:</label>
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Second number:</label>
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Operation</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md">
            <option value="+">Add (+)</option>
            <option value="-">Subtract (−)</option>
            <option value="*">Multiply (×)</option>
            <option value="/">Divide (÷)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full  mt-5 bg-blue-600 text-white p-2 px-4 rounded-md hover:bg-blue-700 transition">
          Calculate
        </button>
      </form>

      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

      {result !== null && !error && (
        <div className="mt-6 text-center text-lg">
          <span className="font-semibold">Result:</span> {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;

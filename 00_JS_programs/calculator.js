(function calculator() {
  let result;

  const a = parseFloat(prompt("Calculator Program\nEnter first num: "));
  const op = prompt("Calculator Program\nEnter the operator(+, -, *, /): ");
  const b = parseFloat(prompt("Calculator Program\nEnter second num: "));

  switch (op) {
    case "+":
      result = a + b;
      alert(`Result = ${result}`);
      break;
    case "-":
      result = a - b;
      alert(`Result = ${result}`);
      break;
    case "*":
      result = a * b;
      alert(`Result = ${result}`);
      break;
    case "/":
      result = a / b;
      alert(`Result = ${result}`);
      break;
    default:
      alert(`Invalid operator`);
  }
})();

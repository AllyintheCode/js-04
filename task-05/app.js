function calcualtor(num1, operator, num2) {
  if (operator === "+") {
    console.log(`sizin emeliyyat : ${num1} + ${num2} = ${num1 + num2}`);
  }
  else if (operator === "-") {
    console.log(`sizin emeliyyat : ${num1} - ${num2} = ${num1 - num2}`);
  }
  else if (operator === "*") {
    console.log(`sizin emeliyyat : ${num1} * ${num2} = ${num1 * num2}`);
  }
  else if (operator === "/") {
    console.log(`sizin emeliyyat : ${num1} / ${num2} = ${num1 / num2}`);
  }
}
calcualtor(10, "+", 20)
calcualtor(10, "-", 20)
calcualtor(10, "*", 20)
calcualtor(10, "/", 20)
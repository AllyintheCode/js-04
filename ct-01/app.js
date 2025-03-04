// function hesabla(startIndex, endIndex) {
//   let cem = 0;
//   for (let i = startIndex; i <= endIndex; i++) {
//     cem += i
//   }
//   console.log(cem);

//` }
// hesabla(1, 100)
function calculate(num1, oper, num2) {
  switch (oper) {
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
  }
  switch (oper) {
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
  }
  switch (oper) {
    case "*":
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
  }
  switch (oper) {
    case "/":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
  }
}
calculate(10, "+", 20)
calculate(10, "-", 20)
calculate(10, "*", 20)
calculate(10, "/", 20)
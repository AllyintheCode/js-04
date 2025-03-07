// function eded(num) {
//   let number = num * 2
//   console.log(number);
// }
// eded(30)



// function pow(num1, num2) {
//   let quvvet = num1 ** num2
//   console.log(quvvet);
// }
// pow(2, 5) //32


// function kok(num1) {
//   let ededinKoku = num1 ** 0.5
//   console.log(ededinKoku);
// }
// kok(81)




// function text(word) {
//   for (let i = 0; i <= word.length; i++) {
//     let say = 0
//     console.log(word.length[i] - 1);
//   }
// }
// text("salam")

function isNotANumber(varible) {
  if (varible === typeof String) {
    console.log("false");
  }
  else if (varible === typeof NaN) {
    console.log("true");
  }
}
isNotANumber(25)

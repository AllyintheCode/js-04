function fuk(reqem) {
  let hasil = 1
  for (let i = 1; i <= reqem; i++) {
    hasil *= i
  }
  console.log(hasil)
}
fuk(5);


// function fuk(reqem) {
//   if (reqem === 0 || reqem === 1) {
//     return 1;
//   }
//   else {
//     return reqem * fuk(reqem - 1)
//   }
// }
// console.log(fuk(5));

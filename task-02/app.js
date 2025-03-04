function TheBigestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log(`sizin en boyuk edediniz ${a}-dir`);
  }
  else if (b > a && b > c) {
    console.log(`sizin en boyuk edediniz ${b}-dir`);
  }
  else if (c > a && c > b) {
    console.log(`sizin en boyuk edediniz ${c}-dir`);
    ;
  }
}
TheBigestNumber(10, 20, 30)
TheBigestNumber(21, 18, 16)
TheBigestNumber(11, 19, 5)

//islemedi
// function TheBigestNumber(a, b, c) {
//   switch (a) {
//     case a > b && a > c:
//       console.log(`sizin en boyuk edediniz ${a}-dir`);
//   }
//   switch (b) {
//     case b > a && b > c:
//       console.log(`sizin en boyuk edediniz ${b}-dir`);
//   }
//   switch (c) {
//     case c > a && c > b:
//       console.log(`sizin en boyuk edediniz ${c}-dir`);
//   }
// }
// TheBigestNumber(10, 20, 30)
// TheBigestNumber(21, 18, 16)
// TheBigestNumber(11, 19, 5)
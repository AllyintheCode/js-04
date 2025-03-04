function minNumber(a, b) {
  if (a < b) {
    console.log(`${a} sizin kicik ededinizdir`);
  }
  else if (b < a) {
    console.log(`${b} sizin kicik edinizdir`);
  }
  else if (a = b) {
    console.log(`{a} ve ${b} ededleri bir birine beraberdir`);
  }
}
minNumber(20, 30)
minNumber(10, 65)
minNumber(45, 25)
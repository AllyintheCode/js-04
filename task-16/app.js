function armStrongNumber(number) {
  let str = number.toString();
  let length = str.length;


  for (let i = 0; i < length; i++) {
    return i
  }
  if (str[0] ** 2 + str[1] ** 2 + str[3] ** 2 == number) {
    console.log("bu astn");
  } else {
    console.log('deyil');

  }
}

armStrongNumber(153);
function pro(number) {
  let cem = 0
  for (i = 1; i < number; i++) {
    if (number % i === 0) {
      cem += i
    }
  }
  if (cem === number && number > 0) {
    console.log("sizin edediniz mukemmeldir");
  } else {
    console.log("sizin edediniz mukemmel deyil");

  }
}
pro(10);
pro(28);


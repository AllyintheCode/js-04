function IsLucky(seriya) {
  seriya = seriya.toString()
  return (seriya[0] - 0) + (seriya[1] - 0) + (seriya[2] - 0) === (seriya[3] - 0) + (seriya[4] - 0) + (seriya[5] - 0)
}
console.log(IsLucky(234801));
console.log(IsLucky(100111));

//gpt ile yazdim ama niye 0 cixdigini bilmedim
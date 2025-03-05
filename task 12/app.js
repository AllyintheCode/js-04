let ay = prompt("ay daxil edin")
function hesablayici(ay) {
  switch (ay) {
    case "yanvar": case "mart": case "may": case "iyul": case "avqust": case "oktyabr": case "dekabr":
      console.log(`${ay} 31 gundur`);
      break;
    case "aprel": case "iyun": case "sentyabr": case "noyabr":
      console.log(`${ay} 30 gundur `);
      break;
    case "fevral":
      console.log(`${ay} 28/29 gundur`);
      break;
    default:
      console.log("Duzgun ay daxil edin");
  }
}
hesablayici(ay)
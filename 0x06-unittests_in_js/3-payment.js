const Utils = require("./utils");
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber(type: 'SUM', a: totalAmount, b: totalShipping);

  console.log(`The total is: ${result}`);
}

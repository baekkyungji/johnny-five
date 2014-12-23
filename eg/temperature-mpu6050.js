var five = require("../lib/johnny-five.js");
var board = new five.Board();

board.on("ready", function() {
  var temperature = new five.Temperature({
    controller: "MPU6050"
  });

  temperature.on("change", function() {
    console.log("temperature");
    console.log("  celsius      : ", this.celsius);
    console.log("  fahrenheit   : ", this.fahrenheit);
    console.log("  kelvin       : ", this.kelvin);
    console.log("--------------------------------------");
  });
});

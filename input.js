const { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MESSAGE } = require("./constants");

let connection;
//function to catch keyboard
const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    
    return stdin;
  };

//movements sent by user through keyboard
const handleUserInput = function(key){
    if (key === '\u0003') {
        process.exit();
      } else if (key === MOVE_UP){
        connection.write("Move: up");
      } else if ( key === MOVE_DOWN){
        connection.write("Move: down");
      } else if ( key === MOVE_LEFT){
        connection.write("Move: left");
      } else if ( key === MOVE_RIGHT){
        connection.write("Move: right");
      } else if ( key === MESSAGE){
        console.log("SNAKESSSSSS!")
      }
};


  module.exports = {
    setupInput
  };
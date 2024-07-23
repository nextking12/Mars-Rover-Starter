const Message = require("./message");

let commands = ["Stop", "Go"];

let testObj = {
   name : "King",
   commands : [commands]
};

class Rover {
   // Write code here!
   constructor(position){
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110
      
      }
      receieveMessage(message){
         let retObj = {};

         if (message.name){
            retObj["name"] = message.name
            //console.log(retObj);
            //return retObj;
         }   if (message.name && message.commands){
             retObj["name"] = message.name;
                retObj["commands"] = message.commands;
                return retObj;
         }
        // return retObj;


      }
   }
   
   let newRover = new Rover()
   console.log(newRover.receieveMessage(testObj));
    // console.log(testObj.commands[0][1]) 
     



module.exports = Rover;
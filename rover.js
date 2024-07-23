const Message = require("./message");

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
            return retObj;
         }
        // return retObj;


      }
   }
   
      
      
   



module.exports = Rover;
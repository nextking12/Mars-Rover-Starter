const Message = require("./message");

let results = ["Complete", "Incomplete"];
///let newMessage = new Message()

let commands = ["MOVE", "STATUS_CHECK", "MODE_CHANGE"]
let roverStatus = {};

let testObj = {
   name : "MOVE",
   results : [results]
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
         }   if (message.name && message.results){
             retObj["name"] = message.name;
                retObj["results"] = message.results;
                return retObj;
         }  //   if (message.commands === newMessage("STATUS_CHECK")){

         }
        // return retObj;
      

      }
  // }
   
   let newRover = new Rover()
   console.log(newRover.receieveMessage(testObj).results);
    // console.log(testObj.commands[0][1]) 
     



module.exports = Rover;
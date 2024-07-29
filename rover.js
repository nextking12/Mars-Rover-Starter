const Message = require("./message");


class Rover {
   
   constructor(position){
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110
      }
      
      receiveMessage(message){
         
         let returnObj = {
            message : message.name,
            results : []
         }; 

         for (let i = 0; i < message.commands.length; i++) {
            if (message.commands[i].commandType === "STATUS_CHECK") {
                  returnObj.results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})

             } else if (message.commands[i].commandType === "MODE_CHANGE") {
                  this.mode = message.commands[i].value
                     returnObj.results.push({completed: true})
               
                } else if (message.commands[i].commandType === "MOVE") {
                   if (this.mode === "LOW_POWER"){
                      returnObj.results.push({completed: false})
               
               
                 } else if (this.mode === "NORMAL") {
                      returnObj.results.push({completed: true})
                       this.position = message.commands[i].value
               } 
            }
      }
       return returnObj;
      } 
   }
      
  
   
   
     



module.exports = Rover;
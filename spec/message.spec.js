const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
   
        
        it("Test 4: throws error if name is NOT passed into constructor as the first parameter", function() {
          expect( function() { new Message();}).toThrow(new Error('Name required.'));
      
        });
        it("Test 5: constructor sets name", function() {
          
          let newObjectName = new Message("STATUS_CHECK")
          expect(newObjectName.name).toBe("STATUS_CHECK")
        });
       it("Test 6: contains a commands array passed into the constructor as the 2nd argument", function() {

        let commands = [new Command("STATUS_CHECK", new Command("MODE_CHANGE"))]    
        let message = new Message("Message to MOVE", commands)
        expect(message.commands).toBe(commands)
        });  
      
      });
      



const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  //TEST 7

  it("constructor sets position and default values for mode and generatorWatts", function(){
    let newPosition = new Rover(43333);
    let roverMode = new Rover('NORMAL')
    let generatorWatts = new Rover(110)

    expect(newPosition.position).toBe(43333)
    expect(roverMode.mode).toBe('NORMAL')
    expect(generatorWatts.generatorWatts).toBe(110)
  });
  //TEST 8

  it("response returned by receiveMessage contains the name of the message", function(){
   // let newMessage = new Message("message")
    let newRover = new Rover("message")

    expect(newRover.receieveMessage("message")).toBe(newRover.name)
  

    
  })


  

});

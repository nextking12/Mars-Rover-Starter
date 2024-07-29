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
    let command = new Command('STATUS_CHECK');
    let message = new Message("Message name", command);
    let rover = new Rover();
    let response = rover.receiveMessage(message).message;

   expect(response).toEqual(message.name)
  });
   //TEST 9
   it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("Message with 2 commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message).results.length;

   expect(response).toBe(2)

   });
   //TEST 10
   it("esponds correctly to the status check command", function(){
    let command = [new Command('STATUS_CHECK')];
    let message = new Message("Message with 2 commands", command);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message).results[0];
    let result = {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 98382}}

   expect(response).toEqual(result)

   });

  //TEST 11
  it("responds correctly to the mode change command", function(){
    let command = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message("Message with MODE_CHANGE", command);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message).results[0];
    let result = {"completed" : true};

   expect(response).toEqual(result)
   expect(rover.mode).toEqual('LOW_POWER');


   });
   //TEST 12
   it("responds with a false completed value when attempting to move in LOW_POWER mode", function(){
    let command = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 10)];
    let message = new Message("Message with MOVE", command);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message).results[1];
    let result = {"completed" : false};

   expect(response).toEqual(result);
   


   });
   //TEST 13
   it("responds with the position for the move command", function(){
    let command = [new Command('MOVE', 'NORMAL')];
    let message = new Message("Message with MOVE", command);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message).results[0];
    let result = {"completed" : true};

   expect(response).toEqual(result);
   


   });

});

var mongoose = require('mongoose');

// this connects us to our database
var connectionString = process.env.DB;

console.log('attempting to connect to Mongo DB');

mongoose.connect(connectionString); // connect to the DB supplied in the connectionString

mongoose.connection.on('connected', function(){
  console.log('mongoose connected to: ' + process.env.DB);
});

mongoose.connection.on('error', function(error){
  console.log('mongoose connection error: ' + error);
});

mongoose.connection.on('disconnected', function(){
  console.log('mongoose disconnected!');
});

//listen for the 'error' and 'disconnected' events
//log out something when either occur
//then kill your server.
//which event fired?
//restart server.
//then go find the terminal tab running sudo mongod
//kill it
//which event fired?
//when done, restart sudo mongod and get ready for block #2

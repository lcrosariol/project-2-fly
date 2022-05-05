require("./config/database");
const Flight = require("./models/flight");
const Enroute = require("./models/performer");


/*-- For each exercise below, write the code as described --*/

Promise.resolve().then(function() {
  console.log('HERE')
  // 1) Find all flight docs
  return Flight.find({});  // remember to return the promise!
}).then(function(result) {
  console.log('1): ', result)
  // 2) Find all performer docs
  return Enroute.find({});
}).then(function(result) {
  console.log('2): ', result)
  // Follow the same .then structure used above from this point forward
  // Don't forget to console.log the exercise number also as shown above 
  // 3) Find all flights with an MPAA Rating of 'PG'
  return 
}).then(function(result) {
  console.log("3): ", result);
})

  // 4) Find all flights that are still showing


  // 5) Find all flights with an MPAA Rating of 'PG' or 'PG-13'


  // 6) Find the first flight found with a releaseYear of 2018


  // 7) Find all flights released after 1980
  

  // 8) Find all flights whose titles start with a 'C'
  // Hint: StackOverflow will show how to use a regular expression
  

  // 9) Find the performer named 'Rami Malek'
  
  
  // 10) Find all performers born before 1980
  
  
  // 11) Find all performers whose name starts with a 'J'


  // 12) Add a reference to performer 'Bill Murray' to
  //     the flight Caddyshack's airport property and save.
  //     console.log the updated flight.


.then(function() {
  process.exit();
});
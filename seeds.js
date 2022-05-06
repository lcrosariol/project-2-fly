require('./config/database');
const Flight = require('./models/flight');
const Enroute = require('./models/enroute');
const data = require('./data');

const p1 = Flight.deleteMany({});
const p2 = Enroute.deleteMany({});

Promise.all([p1, p2])
    .then(function (results){
        // console.log(results);
        return Enroute.create(data.enroutes);
    })
    .then(function (enroutes){
        // console.log(enroutes);
        return Flight.create(data.flights);
    })
    .then(function (flights){
        return Promise.all([
            Enroute.findOne({name: 'Mark Hamill'}),
            Flight.findOne({title: 'Star Wars - A New Hope'})
        ]);
    })
    .then(function (results){
        const mark = results[0];
        const starWars = results[1];
        starWars.airport.push(mark); 
        return starWars.save();
    })
    .then(function (){
        process.exit();
    })
;





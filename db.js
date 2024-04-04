const mongoose = require('mongoose');

//define the mongodb connecion url
const mongoURL = 'mongodb://localhost:27017/hotels' 

//set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

//get the default connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to the database');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});


//define event listener for database connection 

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

//export a dattabase connection 
module.exports = db; 























































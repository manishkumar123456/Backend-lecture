// function add (a,b){
//     return a + b ;

// }

// var add = function(a,b){
//     return (a+b);
// }
// var add = (a , b) => {return a+ b};

//      var add = (a , b) => a+ b;

//     var result = add(60,80);
//     console.log(result);

// (function() {
//     console.log('Manish kumar');
// })();

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt' , 'Hi' + user.username + '!/n', ()=> {
//     console.log('file is created');
// });

// const objectToConvert = {
//     name:  "Manish kumar",
//     age:  23
// };
// const json = JSON.stringify(objectToConvert);
// console.log(json);

// console.log(typeof json);

const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body




app.get("/", function (req, res) {
  res.send("welcome to my hotel ");
});

// app.get('/roti', (req, res)=>{

//     res.send('sure sir , i would love to serve roti')
// })

// app.get('/idly', (req, res)=>{
//     var customized_idly ={
//         name: 'rava idly',
//         quentity: '10',
//         is_sambar: true,
//         is_chutney: false
//     }
//     res.send(customized_idly)
// })








// import the router filees
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, () => {
  console.log("listining on port 3000");
});

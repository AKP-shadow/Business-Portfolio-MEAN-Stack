const express = require("express");
const ejs = require("ejs");
require("dotenv").config() // load .env variables
const morgan = require("morgan") //import morgan
const {log} = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors") // import cors
const UserRouter = require("./controllers/User")
const quoRouter = require("./controllers/quo")
const {PORT = 3000} = process.env
const bodyParser = require("body-parser");
const session = require('express-session');


const app = express()
const { SECRET = "secret" } = process.env;
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  }));
// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies
app.use(bodyParser.urlencoded({
    extended: true
}));


app.set("view engine", "ejs");
  

// Static Files
app.use(express.static('public'));
app.set('views', 'public/views');

app.get('/', function(req, res ) {
    dataStruct={unameExist:false, success:false,loggedin:false}
    res.render('index' , {dataStruct});
}); 
app.get('/home', function(req, res ) {
    res.sendFile('home.html', { root: __dirname + '/public/views/' });
}); 

app.get('/reqForm',function(req,res){
    res.render('sample')
})

app.get('/data', (req, res) => {
    const data = { message: 'Hello, world!'};
    res.json(data);
  });
app.use("/", UserRouter) 
app.use("/",quoRouter)

app.listen(PORT, () => console.info(`Visit : http://localhost:${PORT}`))
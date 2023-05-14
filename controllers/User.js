require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const User = require("../models/User"); // import user model
const bcrypt = require("bcrypt"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens


const router = Router(); // create router to create route bundle

//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
const { SECRET = "secret" } = process.env;

// Signup route to create a new user
router.post("/signup", async (req, res) => {
    try {


        bcrypt.hash(req.body.password, 10, function (err, hash) {
            // Store hash in your password DB.\


            const user_exist = User.findOne({ username: req.body.username });
            console.log(user_exist.username)
            if (user_exist.username) {
                dataStruct = { t: true,loggedin:false, success: false,username:req.body.username, data: 'User Name already exist' }
                console.log('failed')
                res.json(dataStruct)

            }
            else {
                req.body.password = hash
                console.log(req.body)
                const user = User.create(req.body);
                dataStruct = {unameExist: false,loggedin:true,username:req.body.username, success: true ,data:'Registration successful'}
                console.log('success')
                res.render('index', {dataStruct});
            }


        });


    } catch (error) {
        res.status(400).send(error);
    }
});

// Login route to verify a user and get a token
router.post("/login", async (req, res) => {
 
    
    try {
        
        // check if the user exists
        const user = await User.findOne({ username: req.body.username });
        
        if (user) {
            //check if password matches
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                req.session.loggedin = true;
                req.session.username = req.body.username;
                console.log(req.session.username)
                // sign token and send it in response
                const token = await jwt.sign({ username: user.username }, SECRET);
                dataStruct = {unameExist: false,loggedin:true, success: false ,username:req.body.username,data: "You are now signed in as" + req.body.username}
                res.render('index',{dataStruct})
            // console.log('1')
            // res.json({ token ,msg:true,dataStruct,error:''});
            } else {
            console.log('2')
            dataStruct = {unameExist: false,loggedin:false, success: false ,username:req.body.username,data: `Password does not match`}
            res.render('index',{dataStruct})
            }
        } else {
            console.log('3')
            dataStruct = {unameExist: false,loggedin:false, success: false ,username:req.body.username,data: `Username does not exist`}
            res.render('index',{dataStruct})
        }
    } catch (error) {
        console.log('4')
        res.status(400).json({ error });
    }
});

module.exports = router
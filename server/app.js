const express=require('express');
const dotenv=require("dotenv");

const app=express();
dotenv.config({path:'./config.env'});
require('./db/conn');
require('./models/UserSchema');
app.use(express.json());          
app.use(require('./router/auth'));

 //put before auth file as to give access to use json

//to get data in json format
const PORT=process.env.PORT;

//middleware act between req and res and flow is req-middleware(next)-res to user
const middleware=(req,res,next)=>{
    
     console.log("i am a middleware");
     next();
}

//middleware(); //when u pass in app.get then remove this

// app.get('/',(req,res)=>{
//     res.send("this is server home page");
// })
// app.get('/about',middleware,(req,res)=>{
//     console.log("console of about");
//     res.send("About page from server")
   
// })
app.get('/contact',(req,res)=>{
    res.cookie("data",'test');
    res.send("this is a contact page");
})


app.listen(3000,()=>{
    console.log(`Listenning at http://localhost:${PORT} `);
})
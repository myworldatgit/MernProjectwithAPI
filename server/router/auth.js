const express=require('express');
const router=express.Router();
const UserModel=require('../models/UserSchema');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const cookieparser=require('cookie-parser');
const authenticate=require('../middleware/authenticate');
router.use(cookieparser()); // Apply cookie-parser middleware
//including authenticate for about page
//imported user and usermodel note:take it by diff name

router.get('/',(req,res)=>{
    res.send("hii this is home page from auth");
});
//now we have to show this page when user is log in and authenticate
// install cookie-parser to see user log in or not

router.use(cookieparser()); // Apply cookie-parser middleware to parse the taken and then go to authenticate

router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootuser);
    console.log('hello my about page');
})
router.get('/contact',authenticate,(req,res)=>{
    res.send(req.rootuser);
    console.log('hello my contact page');
})

router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('This is logout');
})

router.post('/register',async (req,res)=>{
     console.log('i am in register and i have request from client');
    //console.log(req.body);
    //res.json({message:req.body});
    const {name,email,password,cpassword}=req.body;
   
    if(!name || !email|| !password|| !cpassword){
        console.log("returning 422 inside try ou");
        return res.status(422).json({error:'error occured plz fill properly'});
    }

   if(password !==cpassword){
        console.log(' 2');
        return res.status(422).json({error:"invalid credentials"});
    }
    
    try {
        

        const userExist= await UserModel.findOne({email:email});
        console.log("email checking");
        if(userExist){
            console.log('1');
            return res.status(422).json({error:"user already exist"});
   
        }
    
        else{

            console.log('3');
            const user=UserModel({name,email,password,cpassword})
           
            //now control goes to schema
     
            const Registeruser=await user.save();
            if(Registeruser){
              
             return res.status(201).json({message:"user registered successfully"});

            }
            else{
            
             return res.status(422).json({error:"Failed to register"});
            }
        }


        
    } catch (error) {
        console.log(error);
    }


    //using promises
    // user.findOne({email:email})
    // .then((userExist)=>{
    //     if(userExist){
    //         res.status(422).json({error:"user already exist"});
    //     }
    //     const user=user({name,email,password,cpassword});
    //     user.save()
    //     .then(()=>{
    //         res.status(200).json({message:"user registered successfully"});
    //     }).catch((error)=>{
    //         res.status(500).json({error:"error occured"});
    //     })



    // }).catch((error)=>{
    //     console.log(error);
    // })
})
//in postman content-type json and body raw then send req of type post

//login router

router.post('/login',async(req,res)=>{
    
    try {
        const{email,password}=req.body;
        if(!email||!password){
            return res.status(422).json({error:"Plz data properly"});
        }
        const userlogin=await UserModel.findOne({email:email});
        if(userlogin){
            const isMatch=await bcrypt.compare(password,userlogin.password);
            //generate token and save in cookie and then verify user
            const token=await userlogin.generateAuthToken();
            //function call to generate token in userschema ehich take _id as unique
            console.log(token);
         
            res.cookie("jwtoken",token,{
              expires: new Date(Date.now() +2589200000),
              httpOnly:true,
            });

            if(isMatch){

                return res.status(200).json({message:"Login successfully"});
            }
            else{
                
                return res.status(422).json({error:"Invalid login credentials"});
            }
        }
        else{
            return res.status(422).json({error:"LogIn failed"});

        }
    
        
    } catch (error) {
        console.log(error);
    }


})

router.post('/contactdata',authenticate,async(req,res)=>{
    try {
        const{name,email,message}=req.body;
        console.log(req.body);
        if(!name || !email || !message){
            console.log("data is improper");
           return  res.json({error:"plzz fill the data properly"});
        }
       const usercontact=await UserModel.findOne({_id:req.userId});
       if(usercontact){
        const usermessage=usercontact.addmessage(name,email,message);
        //here add message is a function which we called in userschema or model to add message field
        console.log('before saving');
       await usercontact.save();
       console.log('after saving');
        res.status(201).json({message:"message added successfully"});
       }

    } catch (error) {
        console.log(error);
    }
})

module.exports=router;
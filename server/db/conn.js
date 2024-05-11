const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

mongoose.connect(process.env.DB,{
   // useNewUrlParser: true, 
    //useUnifiedTopology: true, 
    
}).then(()=>{
    console.log("connection succesfull");
}).catch((error)=>{
    console.log(error);
})

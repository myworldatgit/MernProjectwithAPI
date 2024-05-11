const jwt=require('jsonwebtoken');
const UserModel=require('../models/UserSchema');

const authenticate = async(req,res,next) => {
  try {
    const token=req.cookies.jwtoken; //req.cookies.cookie_name
    const verifytoken=jwt.verify(token,process.env.SECRET_KEY); //comapre with secret key

    const rootuser=await UserModel.findOne({_id:verifytoken._id,"tokens.token":token});

    if(!rootuser)
    {throw new Error('User not found')};

    req.token=token; //collecting data for future ref by the name token etc
    req.rootuser=rootuser;
    req.userId=rootuser._id;

    next();


    
  } catch (error) {
    console.log(error);
    return res.status(401).send("Unathorized user found");
  }
}

module.exports=authenticate;

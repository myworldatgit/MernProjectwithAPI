const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
            name:{
                type:String,
                required:true,
            },
            email:{
                type:String,
                required:true,
            },
            message:{
                type:String,
                required:true,
            },

        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ]

})

//hashing the password before calling save in auth js register router
UserSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
        
    }
    next();
})

UserSchema.methods.generateAuthToken=async function(){
    try {
       let token= jwt.sign({_id:this._id},process.env.SECRET_KEY);
       this.tokens=this.tokens.concat({token:token});
       await this.save();
       return token;
       //control returns value to login in auth


    } catch (error) {
        console.log(error);
    }
}

//adding messages from route contact which came from contact in server side
UserSchema.methods.addmessage=async function(name,email,message){
    try{
        console.log('enter');
        this.messages=await this.messages.concat({name,email,message});
        console.log("concat");
        await this.save();
        return this.messages;

    }catch(error){
        console.log(error);
    }
}


const user=mongoose.model('USER',UserSchema);

module.exports=user;
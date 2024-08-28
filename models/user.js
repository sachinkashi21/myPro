const mongoose = require("mongoose");
const {Schema}=mongoose;
const passportLocalMongoose=require("passport-local-mongoose");
const Listing = require("./listing");

let userSchema= new Schema({
    email:{
        type: String,
        required: true,
    },
})

userSchema.plugin(passportLocalMongoose);

userSchema.post("findOneAndDelete",async (user)=>{
    if(user){
        let result=await Listing.deleteMany({owner: user._id});
        console.log(result);
    }
})

module.exports=mongoose.model("User",userSchema)
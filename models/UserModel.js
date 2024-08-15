const mongoose =require('mongoose')
const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    firstName:{type:String},
    lastName:{type:String},
    profileImage:{type:String,},
    password:{type:String,required:true}
},{
    toJSON:{
        transform:function (doc,ret){
            ret.userId=ret._id.toString();
            delete ret._id;
            delete ret.__v;
        }
    }
});
module.exports=mongoose.model('User',UserSchema)
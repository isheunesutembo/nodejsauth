const User=require('../models/UserModel')

module.exports={
    getUser:async(req,res)=>{
        try{
            const id=req.params.id;
            const user=await User.findById(id)
            const {password,__v,createdAt,...userData}=user._doc;
            res.status(200).json({...userData})
    
        }catch(error){
            res.status(500).json({status:false,message:error.message})
        }
       
    },
    updateUser:async(req,res)=>{
        try{
            co
            const id=req.params.id;
            const user=await User.findByIdAndUpdate(id)
            const {password,__v,createdAt,...userData}=user._doc;
    
        }catch(error){
            res.status(500).json({status:false,message:error.message})
        }
       
    },
    deleteUser:async(req,res)=>{
        try{
            const id=req.params.id;
            await User.findByIdAndDelete(id);
            res.status(200).json({status:false,message:"User deleted successfuly"})
        }catch(error){
            res.status(500).json({status:false,message:error.message})
        }
    }
    
}
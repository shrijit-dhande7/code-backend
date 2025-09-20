const express = require('express');

const authRouter =  express.Router();
const {register, login,logout, adminRegister,deleteProfile,getUser,sendVerifyOtp,verifyEmail,getAllUser} = require('../controllers/userAuthent')
const userMiddleware = require("../middleware/userMiddleware");
const adminMiddleware = require('../middleware/adminMiddleware');

// Register
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/send-otp',sendVerifyOtp);
authRouter.post('/verify-account',userMiddleware,verifyEmail);
authRouter.post('/logout', userMiddleware, logout);
authRouter.post('/admin/register', adminMiddleware ,adminRegister);
authRouter.delete('/deleteProfile',userMiddleware,deleteProfile);
authRouter.get('/getUser',userMiddleware,getUser);
authRouter.get('/getAllUser',userMiddleware,getAllUser);
authRouter.get('/check',userMiddleware,(req,res)=>{

    const reply = {
        firstName: req.result.firstName,
        emailId: req.result.emailId,
        _id:req.result._id,
        role:req.result.role,
    }

    res.status(200).json({
        user:reply,
        message:"Valid User"
    });
})



module.exports = authRouter;



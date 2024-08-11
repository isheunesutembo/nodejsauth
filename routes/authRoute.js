const router=require('express').Router()
const { Router } = require('express')
const authController=require('../controllers/authcontroller')

router.post("/registerUser",authController.createUser)
router.post("/loginUser",authController.logInUser)

module.exports=router
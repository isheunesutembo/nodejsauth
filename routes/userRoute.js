const router=require('express').Router()
const { Router } = require('express')
const userController=require('../controllers/userController')
const {verifyTokenAndAuthorization,authenticateToken}=require('../middleware/verifyToken')
router.get("/:id",verifyTokenAndAuthorization,userController.getUser)
router.put("/:id",verifyTokenAndAuthorization,userController.updateUser)
router.delete("/:id",verifyTokenAndAuthorization,userController.deleteUser)

module.exports=router
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controlers/user.controlers');
const authMiddleWare= require('../middlewares/auth.middleware')
router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long')
], userController.registerUser);

router.post('/login',[
  body('email').isEmail().withMessage('Invalid EMail'),
  body('password').isLength({min:6}).withMessage('Password must have 6 characters')
],
  userController.loginUser
)

router.get('/profile',authMiddleWare.authUser ,userController.getUserProfile)
router.get('/logout',authMiddleWare.authUser,userController.logoutUser) 

module.exports = router;

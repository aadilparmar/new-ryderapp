const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userControler = require('../controlers/user.controlers');
const authMiddleWare= require('../middlewares/auth.middleware')

router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long')
], userControler.registerUser);

router.post('/login',[
  body('email').isEmail().withMessage('Invalid EMail'),
  body('password').isLength({min:6}).withMessage('Password must have 6 characters')
],
  userControler.loginUser
)

router.get('/profile',authMiddleWare.authUser ,userControler.getUserProfile)
router.get('/logout',authMiddleWare.authUser,userControler.logoutUser) 

module.exports = router;

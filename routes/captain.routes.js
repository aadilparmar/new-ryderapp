const captainControler=require('../controlers/captain.controlers')
const express = require('express');
const router = express.Router();
const {body}= require('express-validator')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be atleast 3 character long'),
    body('password').isLength({min:6}).withMessage("Password must be 6 character long"),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Capacity needs to be atleast 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')
],captainControler.registerCaptain)
 
module.exports= router;
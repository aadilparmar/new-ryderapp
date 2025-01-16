const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideControler = require('../controlers/ride.controlers');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn([ 'auto', 'car', 'moto' ]).withMessage('Invalid vehicle type'),
    rideControler.createRide
)
router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    rideControler.getFare
)
router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideControler.confirmRide
)

module.exports = router;

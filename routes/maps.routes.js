const express =require('express')
const router =express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const { query } = require('express-validator');
const mapControlers=require('../controlers/maps.controlers')


router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapControlers.getCoordinates
);
router.get('/get-distance-time',
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapControlers.getDistanceTime
)
router.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapControlers.getAutoCompleteSuggestions
)
module.exports = router;
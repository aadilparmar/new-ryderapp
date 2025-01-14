const rideService = require('../services/ride.services');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.services');
const rideModel = require('../models/ride.model');


module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        res.status(201).json(ride);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }

};

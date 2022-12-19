const express = require('express');
const router = express.Router();
const Profile = require('../models/mProfile');

// get method to get all data
router.get('/', async (req, res) => {
    try {
        const profile = await Profile.find();
        res.json(profile);
    } catch (err) {
        res.send('Error', err);
    }
});

// post method to save data
router.post('/', async (req, res) => {

    let profile = new Profile({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        mobile: req.body.mobile,
        phone: req.body.phone
    });

    try {
        const dataToSave = await Profile.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//get by Id Method
router.get('/:id', async (req, res) => {
    try {
        const data = await Profile.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//Update by Id Method
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Profile.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Profile.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router;
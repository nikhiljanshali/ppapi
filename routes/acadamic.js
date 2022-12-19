const express = require('express');
const router = express.Router();
const Acadamic = require('../models/mAcadamic');

// get method to get all data
/**
 * @swagger
 * /acadamic:
 *   get:
 *     summary: Retrieve a list of acadamic.
 *     responses:
 *       200:
 *         description: A list of acadamic.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get('/', async (req, res) => {
    try {
        const acadamic = await Acadamic.find();
        res.json(acadamic);
    } catch (err) {
        res.send('Error', err);
    }
});

// get method to get data by id
router.get('/:id', async (req, res) => {
    try {
        const data = await Acadamic.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// post method to get all data
router.post('/', async (req, res) => {
    let acadamic = new Acadamic({
        university: req.body.university,
        uLink: req.body.uLink,
        college: req.body.college,
        cLink: req.body.cLink,
        educationType: req.body.educationType,
        subject: req.body.subject,
        startMonth: req.body.startMonth,
        startYear: req.body.startYear,
        endMonth: req.body.endMonth,
        endYear: req.body.endYear,
        percentage: req.body.percentage,
    });
    try {
        const dataToSave = await acadamic.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//Update by Id Method
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        debugger;
        const options = { new: true };

        const result = await Acadamic.findByIdAndUpdate(
            id,
            updatedData,
            options
        )

        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Acadamic.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;
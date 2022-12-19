const express = require('express');
const router = express.Router();
const EducationsList = require('../models/mEducationType');
const MonthsList = require('../models/mMonths');

// get method to get all data
/**
 * @swagger
 * common/educations:
 *   get:
 *     summary: Retrieve a list of education Type.
 *     responses:
 *       200:
 *         description: A list of education Type.
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
router.get('/educations', async (req, res) => {
    try {
        const educations = await EducationsList.find();
        res.json(educations);
    } catch (err) {
        res.send('Error', err);
    }
});

router.get('/months', async (req, res) => {
    try {
        const months = await MonthsList.find();
        res.json(months);
    } catch (err) {
        res.send('Error', err);
    }
})

module.exports = router;
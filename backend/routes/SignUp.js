const express = require('express')
const router = express.Router()
const SignUp = require('../models/SignUp')

// Get all route

router.get('/', async(req, res) => {
    const signups = await SignUp.find()
    res.json(signups)
})

// Post
router.post('/new', async(req, res) => {
    const { fname, lname, age, email, password, cpassword } = req.body;
    const newSignUp = new SignUp(
        { fname, lname, age, email, password, cpassword }
    )
    const savedSignUp = await newSignUp.save()
    res.json(savedSignUp)
})

module.exports = router




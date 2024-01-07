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

// Login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await SignUp.findOne({email, password})
    if (user) {
        res.json({ message: "User logged In" })
    }else {
        res.status(401).json({ message:'User not LoggedIn' })
    }
})





module.exports = router




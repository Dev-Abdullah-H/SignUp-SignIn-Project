const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

// Get all route

router.get('/', async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})

// Post 

router.post('/new', async(req, res) => {
    const { name, todo} = req.body;
    const newTodo = new Todo(
        {
            name,
            todo 
        }
    )
    const savedTodo = await newTodo.save()
    res.json(savedTodo)
})




// router
module.exports = router
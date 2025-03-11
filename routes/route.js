const express = require('express');
const router = express.Router();

const users = require('./../services/User');

router.post('/users', (req, res) => { 
    const userData = req.body;
    userData.id = users.length + 1
    users.push(userData);
    res.status(201).json(
        {message : "User Created Successfully", user : userData}
    )
})

router.get('/users', (req, res) => {
    res.status(200).json(users);
})

router.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userData = users.find(ele => ele.id === id);
    res.status(200).json(userData);
})

router.put('/users/:id', (req, res) => {
    const updatedData = req.body;
    const id = parseInt(req.params.id);
    const userData = users.find(ele => ele.id === id);
    userData.email = updatedData.email
    userData.marks = updatedData.marks
    res.status(201).json(
        {message : "Details Updated Successfully", user : userData}
    )
})

router.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(ele => ele.id === id);
    users.splice(index, 1);
    res.status(200).json(
        {message:"User Details Deleted Successfully"}
    )
})

module.exports = router;
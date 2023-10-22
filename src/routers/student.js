const express = require('express');
const router = new express.Router();
const Student = require("../models/students");

// REST API : REpresentational State Transfer API
// Define : It is an architectural design for api uses http request to access and use data
// CRUD : REST Operations
// Create : POST
// Read : GET
// Update : PUT / PATCH
// Delete : DELETE

// Create a new student : 

// app.post('/students', (req, res) => {

//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((error) => {
//         res.status(400).send(error);
//     })
// });

// Create a new router : 

// const router = new express.Router();

// Define the router : 

// router.get("/user", (req, res) => {
//     res.send("Hello I am User !!");
// });


router.post('/students', async (req, res) => {

    try {
        console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (error) {
        res.status(400).send(error);
    }

});


// Read data of registered students : 

router.get('/students', async (req, res) => {
    try {
        const studentData = await Student.find();
        res.send(studentData);

    } catch (error) {
        res.send(error);
    }
});


// Get indivisual data of students :

// app.get('/students/:id', async (req, res) => {
//     try {

//         const _id = req.params.id;
//         const studentData = await Student.findById(_id);
//         console.log(studentData);

//         if (!studentData) {
//             return res.status(404).send();
//         }
//         else {
//             res.send(studentData);
//         }

//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// Update student details : 

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(200).send(updateData);
        console.log(updateData);
    } catch (error) {
        res.status(404).send();
    }
});


// Delete data of students : 

router.delete('/students/:id', async (req, res) => {
    try {
        const deleteData = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }

        res.send(deleteData);
        console.log(deleteData);

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;


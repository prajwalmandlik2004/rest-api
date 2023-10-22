const mongoose = require('mongoose');
const validator = require('validator');

// Create schema of student : 
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exist !!"],
        validate(value) {
            if (!(validator.isEmail(value))) {
                throw new Error("Enter valid email !!");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
});


// Create collection for students : 

const Student = new mongoose.model('Student' , studentSchema);

module.exports = Student;







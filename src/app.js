const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require("./database/connection");
const Student = require("./models/students");
const studentRouter = require("./routers/student");


app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log(`listening to port number ${port}`)
});


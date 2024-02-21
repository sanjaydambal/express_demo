const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!!");
});
const courses = [
    {
        id: 1,
        name: "course1",
        price: 1000
    },
    {
        id: 2,
        name: "course2",
        price: 2000
    },{
        id: 3,
        name: "course3",
        price: 3000                             
    }
]

app.get("/api/courses", (req, res) => {
    res.send(courses);

})
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`The course with the given ID ${req.params.id} was not found.`);
    res.send(course);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {    
    console.log("Server is running on port " + port);
});
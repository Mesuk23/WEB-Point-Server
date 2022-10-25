const express = require('express');
const cors = require('cors');
const courses = require('./courses.json')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('API Running !!!')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n => n.id == id);
    res.send(selectedCourses);
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
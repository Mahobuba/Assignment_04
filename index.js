const cors = require('cors');
const express = require('express');
const app = express();
const courseData = require('./data/courseDetails.json');

// CORS Middleware
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("Bootcamp The Book shop Server is Running");
});

// Endpoint for all courses
app.get('/api/products', (req, res) => {
  res.json(courseData);
});

// Endpoint for a specific course by ID
app.get('/api/products/:id', (req, res) => {
  const course = courseData.find(c => c._id === req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).send('Course not found');
  }
});

// Port configuration
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

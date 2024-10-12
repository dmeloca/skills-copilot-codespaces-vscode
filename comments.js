// Create web server
// Create a web server that listens on port 3000. When a GET request is made to the path /comments, the server should respond with an array of comments. Each comment should have a unique id property.

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { id: 1, comment: 'This is the first comment' },
  { id: 2, comment: 'This is the second comment' },
  { id: 3, comment: 'This is the third comment' },
  { id: 4, comment: 'This is the fourth comment' },
  { id: 5, comment: 'This is the fifth comment' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
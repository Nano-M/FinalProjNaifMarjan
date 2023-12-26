// server.js
 /*
const http = require('http');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
 
const PORT = 3100;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});*/
/*
const express = require('express');
const app = express();
const port = 3100;

// Set up a route to render the index page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
*/
const express = require('express');
const app = express();
const port = 3300;

// Set the 'public' folder as a static directory
app.use(express.static('public'));

// Set the 'images' folder as a static directory
app.use(express.static('images'));

// Set the 'views' folder as the views directory
app.set('views', './views');

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Set up a route to render the index page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

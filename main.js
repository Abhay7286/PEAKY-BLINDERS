const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000; // Vercel dynamic port

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "dist")));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/news', (req, res) => res.render('news'));
app.get('/watch', (req, res) => res.render('watch'));
app.get('/live', (req, res) => res.render('live'));
app.get('/shop', (req, res) => res.render('shop'));

// Catch-all for undefined routes (404)
app.get("*", (req, res) => {
  res.render('404'); // Create a 404.ejs file for better UX
});

// Start server
app.listen(port, () => {
  console.log(`Peaky Blinders listening on port ${port}`);
});

// CORE MODULE
const path = require('path');

// EXTERNAL MODULE
const express = require('express');

const app = express();

// set view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/collection', (req, res) => {
    res.render('pages/collection');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.use((req, res) => {
    res.status(404)
    res.render('pages/404');
})


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})
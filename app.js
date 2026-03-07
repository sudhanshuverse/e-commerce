// CORE MODULE
const path = require('path');

// EXTERNAL MODULE
const express = require('express');

const app = express();

// set view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render('pages/home', {
        categories: [
            { name: 'Fashion', label: 'Beauty Picks', image: '/assets/images/fashion.jpg' },
            { name: 'Electronics', label: 'Computer & Accessories', image: '/assets/images/electronics.jpg' },
            { name: 'Sports', label: 'Video Games', image: '/assets/images/sports.jpg' },
            { name: 'Home', label: 'Home & Living', image: '/assets/images/home.jpg' },
        ],

        lastViewed: [
            { id: 1, name: 'Product 1', img: '/assets/images/plant.jpg', price: 29.99, category: 'Electronics' },
            { id: 2, name: 'Product 2', img: '/assets/images/plant.jpg', price: 49.99, category: 'Fashion' },
            { id: 3, name: 'Product 3', img: '/assets/images/plant.jpg', price: 19.99, category: 'Home' },
            { id: 4, name: 'Product 4', img: '/assets/images/plant.jpg', price: 99.99, category: 'Sports' },
            { id: 5, name: 'Product 5', img: '/assets/images/plant.jpg', price: 39.99, category: 'Electronics' },
            { id: 6, name: 'Product 6', img: '/assets/images/plant.jpg', price: 59.99, category: 'Fashion' },
            { id: 7, name: 'Product 7', img: '/assets/images/plant.jpg', price: 14.99, category: 'Home' },
            { id: 8, name: 'Product 8', img: '/assets/images/plant.jpg', price: 79.99, category: 'Sports' },
        ],

        fashionImg: '/images/fashion.jpg',
        accessoryImg: '/images/accessories.jpg',
    });

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
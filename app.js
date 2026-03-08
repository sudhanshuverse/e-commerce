const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // ✅ FIX 1: parse form data

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



app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.get('/cart', (req, res) => {  // ✅ FIX 2: removed duplicate res.render
    const cartProducts = [
        {
            product: {
                id: 1,
                name: "Wireless Headphones",
                category: "Electronics",
                img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
                price: "49.99"
            },
            quantity: 2
        },
        {
            product: {
                id: 2,
                name: "Running Sneakers",
                category: "Footwear",
                img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
                price: "89.99"
            },
            quantity: 1
        },
        {
            product: {
                id: 3,
                name: "Leather Backpack",
                category: "Bags",
                img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200",
                price: "34.99"
            },
            quantity: 3
        }
    ];

    const subtotal = cartProducts.reduce((sum, item) => sum + (Number(item.product.price) * item.quantity), 0);
    const shipping = subtotal > 0 ? 5 : 0;
    const total = (subtotal + shipping).toFixed(2);

    res.render('pages/cart', { cartProducts, subtotal, shipping, total });
});

app.get('/signin', (req, res) => {
    res.render('pages/signin', { errors: {}, values: {} });
});

app.get('/signup', (req, res) => {  // ✅ FIX 3: added missing GET /signup route
    res.render('pages/signup', { errors: {}, values: {} });
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const errors = {};

    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';

    if (Object.keys(errors).length > 0) {
        return res.render('pages/signin', { errors, values: { email } });
    }

    res.redirect('/');
});

app.post('/signup', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    const errors = {};
    const values = { name, email };

    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (password && password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';

    if (Object.keys(errors).length > 0) {
        return res.render('pages/signup', { errors, values });
    }

    res.redirect('/signin');
});

app.get('/favourite', (req, res) => {
    const favourites = [
        {
            id: 1,
            name: "Wireless Headphones",
            category: "Electronics",
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
            price: 49.99
        },
        {
            id: 2,
            name: "Running Sneakers",
            category: "Footwear",
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
            price: 89.99
        },
        {
            id: 3,
            name: "Leather Backpack",
            category: "Bags",
            img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
            price: 34.99
        },
        {
            id: 4,
            name: "Sunglasses",
            category: "Accessories",
            img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
            price: 24.99
        },
    ];

    res.render('pages/favourite', { favourites });
});

app.get('/about', (req, res) => {
    res.render('pages/about');
})


app.get('/collection', (req, res) => {
    const products = [
        { id: 1,  name: 'Wireless Headphones', category: 'Electronics', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', price: 49.99, rating: 4, reviews: 128 },
        { id: 2,  name: 'Running Sneakers',     category: 'Sports',      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', price: 89.99, rating: 5, reviews: 84  },
        { id: 3,  name: 'Leather Backpack',     category: 'Accessories', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500', price: 34.99, rating: 4, reviews: 56  },
        { id: 4,  name: 'Smart Watch',          category: 'Electronics', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', price: 199.99, rating: 5, reviews: 210 },
        { id: 5,  name: 'Sunglasses',           category: 'Accessories', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500', price: 24.99, rating: 3, reviews: 33  },
        { id: 6,  name: 'Yoga Mat',             category: 'Sports',      img: 'https://images.unsplash.com/photo-1601925228008-f76da04d0b91?w=500', price: 29.99, rating: 4, reviews: 47  },
        { id: 7,  name: 'Denim Jacket',         category: 'Clothing',    img: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500', price: 59.99, rating: 4, reviews: 91  },
        { id: 8,  name: 'Desk Lamp',            category: 'Home',        img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500', price: 39.99, rating: 4, reviews: 62  },
        { id: 9,  name: 'Bluetooth Speaker',    category: 'Electronics', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500', price: 79.99, rating: 5, reviews: 175 },
        { id: 10, name: 'Cotton T-Shirt',       category: 'Clothing',    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', price: 19.99, rating: 3, reviews: 29  },
        { id: 11, name: 'Water Bottle',         category: 'Sports',      img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500', price: 14.99, rating: 4, reviews: 88  },
        { id: 12, name: 'Scented Candle',       category: 'Home',        img: 'https://images.unsplash.com/photo-1602523961358-f9f03dd557db?w=500', price: 22.99, rating: 5, reviews: 44  },
    ];

    res.render('pages/collection', { products });
});

app.get('/adminLogin', (req, res) => {
    res.render('pages/adminLogin');
})


app.use((req, res) => {
    res.status(404);
    res.render('pages/404');
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
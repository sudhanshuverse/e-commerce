const User = require("../models/User");
const bcrypt = require("bcrypt");

// 🔹 Render pages
const getSigninPage = (req, res) => {
    res.render("pages/signin");
};

const getSignupPage = (req, res) => {
    res.render("pages/signup");
};

// 🔹 SIGNIN
const signinUser = async (req, res) => {
    const { email, password } = req.body;

    let errors = {};

    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    if (Object.keys(errors).length > 0) {
        return res.render("pages/signin", { errors });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.render("pages/signin", {
                errors: { email: "User not found" }
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.render("pages/signin", {
                errors: { password: "Incorrect password" }
            });
        }

        // ✅ SUCCESS LOGIN
        res.redirect("/?success=Login successful");

    } catch (err) {
        console.log(err);
        res.send("Error");
    }
};

// 🔹 SIGNUP
const addUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    let errors = {};

    // 🔴 Validation
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
        return res.render("pages/signup", {
            errors,
            values: { name, email }
        });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.render("pages/signup", {
                errors: { email: "Email already exists" },
                values: { name, email }
            });
        }

        // 🔐 HASH PASSWORD (THIS WAS MISSING ❗)
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.redirect("/signin");

    } catch (err) {
        console.log(err);
        res.send("Something went wrong");
    }
};

module.exports = {
    getSigninPage,
    getSignupPage,
    signinUser,   // ✅ YOU FORGOT THIS
    addUser
};
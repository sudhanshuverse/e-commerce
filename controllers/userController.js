const { getDB } = require("../config/mongodb");
const bcrypt = require("bcrypt");

// SIGNUP
exports.postSignup = async (req, res) => {
  const db = getDB();
  const { name, email, password, confirmPassword } = req.body;
  let errors = {};

  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";
  if (password !== confirmPassword)
    errors.confirmPassword = "Passwords do not match";

  if (Object.keys(errors).length > 0) {
    return res.render("pages/signup", {
      errors,
      values: req.body,
    });
  }

  try {
    const existingUser = await db
      .collection("users")
      .findOne({ email });

    if (existingUser) {
      errors.email = "Email already exists";
      return res.render("pages/signup", {
        errors,
        values: req.body,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    });

    res.redirect("/signin");
  } catch (err) {
    console.log(err);
  }
};

// SIGNIN
exports.postSignin = async (req, res) => {
  const db = getDB();
  const { email, password } = req.body;
  let errors = {};

  if (!email) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";

  if (Object.keys(errors).length > 0) {
    return res.render("pages/signin", { errors });
  }

  try {
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      errors.email = "User not found";
      return res.render("pages/signin", { errors });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      errors.password = "Wrong password";
      return res.render("pages/signin", { errors });
    }

    // SUCCESS LOGIN
    res.render("pages/success", { message: "Login successful!" });
  } catch (err) {
    console.log(err);
  }
};
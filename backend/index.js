const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const { HoldingModel } = require("./model/holdingModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { User } = require("./model/User");

// ✅ Connect to MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ DB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Session config (must be before passport.session)
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // set to true if using HTTPS
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

// ✅ Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(express.json());

// ✅ Passport config
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ✅ Routes
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email });
    await User.register(newUser, password);
    res.status(200).json({ success: true, message: "User registered" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ success: true, user: req.user });
});

app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ success: false, message: "Logout failed" });
    res.json({ success: true, message: "Logged out" });
  });
});

app.get("/check-auth", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true, user: req.user });
  } else {
    res.json({ loggedIn: false });
  }
});

app.get("/allholding", async (req, res) => {
  const holdings = await HoldingModel.find({});
  res.json(holdings);
});

app.get("/allposition", async (req, res) => {
  const positions = await PositionsModel.find({});
  res.json(positions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    res.send("Data saved");
  } catch (err) {
    res.status(500).send("Failed to save data");
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

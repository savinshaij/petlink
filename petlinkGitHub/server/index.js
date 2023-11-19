const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");

const app = express();
var Email = "";
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/petlink");




app.post("/signup", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  Email = email;

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        res.json(user);
      } else {
        res.json("incorrect-password");
      }
    } else {
      res.json("user-not-found");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Error during login" });
  }
});

app.post("/profile", (req, res) => {
  const a = req.body;
  userModel.findOne({ email: Email }).then((user) => {
    if (user) {
      res.json(user);
    } else {
      res.json("error");
    }
  });
});


app.get("/profile-edit", (req, res) => {
  userModel.findOne({ email: Email }).then((user) => {
    if (user) {
      res.json(user);
    } else {
      res.json("error");
    }
  });
});

app.put("/profile-edit", async (req, res) => {
  const updatedUserData = req.body;

  try {
    const user = await userModel.findOneAndUpdate(
      { email: Email },
      updatedUserData,
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Error updating user data" });
  }
});

app.listen(3001, () => {
  console.log("server is running..");
});

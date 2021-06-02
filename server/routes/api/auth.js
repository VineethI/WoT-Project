const express = require("express");
const User = require("../../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const { default: axios } = require("axios");

router.post("/", (req, resp) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return resp.status(400).json({ msg: "Please enter all fields" });
  }

  let data = {};

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exists" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          axios
            .get(
              "https://api.thingspeak.com/channels/1400193/fields/1.json?api_key=LIUM6ROKZHLZA69V&results=2"
            )
            .then((res) => {
              data = res.data.feeds;
              resp.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
                data: data,
              });
            });
        }
      );
    });
  });
});

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;

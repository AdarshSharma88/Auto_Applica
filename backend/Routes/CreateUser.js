const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = "mynameisjoemamamqwertyuiolkjophl";
const router = express.Router();
// const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
router.post(
  "/createuser",

  [
    body("email", "invalid email").isEmail(),
    body("fullname", "name too short").isLength({ min: 5 }),
    body("password", "invalid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        fullname: req.body.fullname,
        password: req.body.password,
        email: req.body.email,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",

  [
    body("email", "invalid email").isEmail(),
    body("password", "invalid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;

    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Email not registered" });
      }

      if (req.body.password !== userData.password) {
        return res
          .status(400)
          .json({ errors: "Email and password does not match" });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;

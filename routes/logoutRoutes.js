const express = require("express");
const router = express.Router();


// Logout route
router.get("/logout", (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).send("Error logging out");
        }
        res.redirect("/");
      });
    } else {
      res.send("you donot have a session");
    }
  });

  module.exports = router;
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (day == 2 && 9 <= hour <= 17) {
    next();
  } else {
    next(res.send("<h1>fermer aujourd'hui</h1>"));
  }
});

router.get("/", function (req, res, next) {
  console.log("hello");
  res.render("index", { title: "Express" });
});

const acceuilRoute = require("./acceuil");
router.use("/acceuil", acceuilRoute);

const contactRoute = require("./contact");
router.use("/contact", contactRoute);

const serviceRoute = require("./service");
router.use("/service", serviceRoute);

module.exports = router;

const fs = require("fs");
const router = require("express").Router();
const Workout = require("../models/workout.js");
var path = require("path");

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/stats.html"));
});


router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
});

router.get("/exercise/:id", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
});

router.get("/", (req, res) => {
    console.log("About to render the homepage.");
    res.sendFile(path.join(__dirname,"../public/index.html"));
});


module.exports = router;

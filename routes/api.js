const router = require("express").Router();
const Workout = require("../models/workout.js");
const Exercise = require("../models/exercise.js");
const { db } = require("../models/workout.js");
const mongoose = require("mongoose");

router.post("/api/workouts", ({body},res) => {
  console.log("In the post route: body = " + JSON.stringify(body));
  Workout.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

 
router.put("/api/workouts/:id", (req, res) => {
  console.log("Looking to find id: "+ req.params.id);
  console.log("Looking to add: " + JSON.stringify(req.body));

  let id = req.params.id;
  //let id= mongoose.Types.ObjectId(req.params.id);

  Exercise.create(req.body).then(
    createdExercise => {

      Workout.findByIdAndUpdate(id, {
        $push: { exercises: createdExercise._id } 
      }).then(
        existingWorkout => { 
          console.log("Saved: ", existingWorkout);
          res.send(existingWorkout);}
      ).catch(err => {
        console.log("Catch Saving Workout Error: " + err);
        res.status(400).json(err);
      })
    }

  ).catch(err => {
      console.log("Catch: " + err);
      res.status(400).json(err);
    });
  
 




});





router.get("/api/workouts/:id",(req,res) => {
  Workout.find({id: req.params.id})
  .then( dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts",(req,res) => {
  console.log("In the Get ROUTE");
  Workout.find({})
  .then( dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});



// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;

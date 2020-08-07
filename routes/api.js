const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({body},res) => {
  console.log("In the post route: body = " + JSON.stringify(body));
  Workout.create(body)
  .then(dbWorkout => {
    resizeBy.json(dbWorkout);
  })
  .catch(err => {
    resizeBy.status(400).json(err);
  });
});

 
router.put("/api/workouts/:id", (req, res) => {
  Workout.updateOne(req.params.id, req.body)
    .then(dbWorkout=> {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts/:id",(req,res) => {
  Workout.find({})
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

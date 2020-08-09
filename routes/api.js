const router = require("express").Router();
const Workout = require("../models/workout.js");


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

 
router.put("/api/workouts/:id", (req,res) => {
  Workout.findByIdAndUpdate(req.params.id,
     {$push: { exercises: [req.body] }})
     .then( updatedWorkout => {
              res.json(updatedWorkout);
          })
        .catch(err => {
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



router.get("/api/workouts/range", (req, res) =>{
  Workout.find({}).limit(7)
  .then(function(workoutRange){
      res.send(workoutRange)
  })
  .catch(function(err){
      if(err)throw err
  });
});



router.get("/api/workouts",(req,res) => {
  console.log("In the Get ROUTE");
  Workout.find({})
  .then( dbWorkouts => {
    res.json(dbWorkouts);
  }).catch(err => {
    res.status(400).json(err);
  });
});


module.exports = router;

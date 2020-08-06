const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [ { name: {
              type:String,
              trim: true
            }, type: {
              type: String,
              trim: true
            },
            duration: {
              type: Number
            },
            weight: {
              type: Number
            },
            reps: {
              type:Number
            },
            sets: {
              type: Number
            }
  }]

});

const Transaction = mongoose.model("Workout", workoutSchema);

module.exports = Transaction;


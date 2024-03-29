const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
	const allWorkouts = workoutService.getAllWorkouts();
	res.send({ status: "ok", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
	const workout = workoutService.getOneWorkOut();
	res.send({ status: "ok", data: workout});
}

const createNewWorkout = (req, res) => {
	const { body } = req;
	// *** ADD ***
	if (
	  !body.name ||
	  !body.mode ||
	  !body.equipment ||
	  !body.exercises ||
	  !body.trainerTips
	) {
	  return;
	}
	// *** ADD ***
	const newWorkout = {
	  name: body.name,
	  mode: body.mode,
	  equipment: body.equipment,
	  exercises: body.exercises,
	  trainerTips: body.trainerTips,
	};
	// *** ADD ***
	const createdWorkout = workoutService.createNewWorkout(newWorkout);
	// *** ADD ***
	res.status(201).send({ status: "OK", data: createdWorkout });
  };
  

const updateOneWorkout = (req, res) => {
	res.send("update an existing workout");
};

const deleteOneWorkout = (req, res) => {
	res.send("delete one existing wokout");
};

module.exports = {
	getAllWorkouts,
	getOneWorkout,
	createNewWorkout,
	updateOneWorkout,
	deleteOneWorkout
}

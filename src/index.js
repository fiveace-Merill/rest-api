const express = require("express");
const v1workoutRouter = require("./v1/routes/workoutRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1workoutRouter);

app.listen(PORT, ()=>{
	console.log(`API is listening at port ${PORT}`);
});


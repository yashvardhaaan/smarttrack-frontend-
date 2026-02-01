import { useEffect, useState } from "react"
import axios from "axios"

function WorkoutList() {

  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/workouts")
      .then(res => setWorkouts(res.data))
  }, [])

  const deleteWorkout = async (id) => {
    await axios.delete(`http://localhost:5000/api/workouts/${id}`)
    window.location.reload()
  }

  return (
    <div>
      <h2>Your Workouts</h2>

      {workouts.map(workout => (
        <div key={workout._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>

          <h3>{workout.exercise}</h3>
          <p>{workout.sets} sets × {workout.reps} reps — {workout.weight} kg</p>

          <button onClick={() => deleteWorkout(workout._id)}>Delete</button>

        </div>
      ))}

    </div>
  )
}

export default WorkoutList

import { useEffect, useState } from "react"
import axios from "axios"

function WorkoutList() {

  const [workouts, setWorkouts] = useState([])

  const fetchWorkouts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/workouts`)
    setWorkouts(res.data)
  }

  useEffect(() => {
    fetchWorkouts()
  }, [])

  const deleteWorkout = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/workouts/${id}`)

    // remove deleted workout from UI instantly
    setWorkouts(prev => prev.filter(workout => workout._id !== id))
  }

  return (
    <div>
      <h2>Your Workouts</h2>

      {workouts.map(workout => (
        <div
          key={workout._id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >

          <h3>{workout.exercise}</h3>
          <p>
            {workout.sets} sets × {workout.reps} reps — {workout.weight} kg
          </p>

          <button onClick={() => deleteWorkout(workout._id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  )
}

export default WorkoutList

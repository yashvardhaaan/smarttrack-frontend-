import axios from "axios"

function WorkoutTable({ workouts, onWorkoutDelete }) {

  const deleteWorkout = async (id) => {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/workouts/${id}`
    )

    // Remove from UI instantly
    onWorkoutDelete(id)
  }

  return (
    <div className="bg-slate-800/70 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-xl overflow-hidden">

      <div className="p-4 font-semibold text-white">
        Your Recent Activity
      </div>

      <table className="w-full text-sm text-slate-300">

        <thead className="bg-slate-900/50">
          <tr>
            <th className="p-3">Exercise</th>
            <th className="p-3">Sets</th>
            <th className="p-3">Reps</th>
            <th className="p-3">Weight</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {workouts.map((w) => (
            <tr key={w._id} className="border-t border-slate-700 text-center">

              <td className="p-3">{w.exercise}</td>
              <td className="p-3">{w.sets}</td>
              <td className="p-3">{w.reps}</td>
              <td className="p-3">{w.weight} kg</td>

              <td className="p-3">
                <button
                  onClick={() => deleteWorkout(w._id)}
                  className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-white"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}

export default WorkoutTable

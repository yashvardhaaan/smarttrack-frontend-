import { useState } from "react"
import axios from "axios"

function WorkoutForm({ onWorkoutAdded }) {

  const [formData, setFormData] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/api/workouts",
        formData
      )

      // update UI without reload
      onWorkoutAdded(res.data)

      setFormData({
        exercise: "",
        sets: "",
        reps: "",
        weight: ""
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="xl:col-span-1">

      {/* CARD */}
      <div className="bg-slate-800/70 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl shadow-xl sticky top-24">

        {/* HEADER */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-blue-400 text-xl">➕</span>
          <h3 className="text-lg font-semibold">
            Log New Workout
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Exercise */}
          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wide">
              Exercise Name
            </label>

            <input
              name="exercise"
              value={formData.exercise}
              onChange={handleChange}
              placeholder="Bench Press"
              className="mt-1 w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Sets + Reps */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-xs text-slate-400 uppercase">
                Sets
              </label>

              <input
                name="sets"
                value={formData.sets}
                onChange={handleChange}
                type="number"
                className="mt-1 w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-xs text-slate-400 uppercase">
                Reps
              </label>

              <input
                name="reps"
                value={formData.reps}
                onChange={handleChange}
                type="number"
                className="mt-1 w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2 outline-none"
                required
              />
            </div>

          </div>

          {/* Weight */}
          <div>
            <label className="text-xs text-slate-400 uppercase">
              Weight (kg)
            </label>

            <input
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              type="number"
              className="mt-1 w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2 outline-none"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition active:scale-95 shadow-lg shadow-blue-500/20"
          >
            + Add Workout
          </button>

        </form>

      </div>

    </section>
  )
}

export default WorkoutForm

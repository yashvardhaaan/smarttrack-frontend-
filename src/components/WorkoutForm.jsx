import { useState } from "react"
import axios from "axios"

function WorkoutForm({ onWorkoutAdded }) {

  const [formData, setFormData] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/workouts`,
        {
          exercise: formData.exercise,
          sets: Number(formData.sets),
          reps: Number(formData.reps),
          weight: Number(formData.weight)
        }
      )

      // Update UI instantly
      if (onWorkoutAdded) {
        onWorkoutAdded(res.data)
      }

      // Clear form
      setFormData({
        exercise: "",
        sets: "",
        reps: "",
        weight: ""
      })

    } catch (error) {
      console.log(error.response?.data || error.message)
      alert(error.response?.data?.error || "API Error")

    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="xl:col-span-1">

      <div className="bg-slate-800/70 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl shadow-xl sticky top-24">

        <div className="flex items-center gap-2 mb-6">
          <span className="text-blue-400 text-xl">➕</span>
          <h3 className="text-lg font-semibold">
            Log New Workout
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="exercise"
            value={formData.exercise}
            onChange={handleChange}
            placeholder="Bench Press"
            className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 outline-none"
            required
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              name="sets"
              value={formData.sets}
              onChange={handleChange}
              type="number"
              placeholder="Sets"
              className="bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2"
              required
            />

            <input
              name="reps"
              value={formData.reps}
              onChange={handleChange}
              type="number"
              placeholder="Reps"
              className="bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2"
              required
            />

          </div>

          <input
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            type="number"
            placeholder="Weight (kg)"
            className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white py-3 rounded-xl font-semibold"
          >
            {loading ? "Adding..." : "+ Add Workout"}
          </button>

        </form>

      </div>

    </section>
  )
}

export default WorkoutForm

import { useEffect, useState } from "react"
import axios from "axios"

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import WorkoutForm from "./components/WorkoutForm"
import WorkoutTable from "./components/WorkoutTable"
import ThemeToggle from "./components/ThemeToggle"

function App() {

  const [workouts, setWorkouts] = useState([])

  // Load workouts once when app loads
  useEffect(() => {
    fetchWorkouts()
  }, [])

  const fetchWorkouts = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/workouts`
    )
    setWorkouts(res.data)
  }

  // Called after add workout
  const handleWorkoutAdded = (newWorkout) => {
    setWorkouts(prev => [newWorkout, ...prev])
  }

  // Called after delete workout
  const handleWorkoutDelete = (id) => {
    setWorkouts(prev => prev.filter(w => w._id !== id))
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-x-hidden
bg-slate-100 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-slate-800
text-slate-900 dark:text-slate-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Header />

       <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">


          <h1 className="text-3xl font-bold mb-8">
            Smart Workout Tracker 💪
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            <WorkoutForm onWorkoutAdded={handleWorkoutAdded} />

            <div className="xl:col-span-2">
              <WorkoutTable
                workouts={workouts}
                onWorkoutDelete={handleWorkoutDelete}
              />
            </div>

          </div>

        </main>

      </div>

      <ThemeToggle />

    </div>
  )
}

export default App

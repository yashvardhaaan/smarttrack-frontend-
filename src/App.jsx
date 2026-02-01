import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import WorkoutForm from "./components/WorkoutForm"
import WorkoutTable from "./components/WorkoutTable"
import ThemeToggle from "./components/ThemeToggle"

function App() {

  return (
    <div className="dark min-h-screen flex bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Header />

        <main className="p-8 max-w-7xl mx-auto w-full">

          <h1 className="text-3xl font-bold mb-8">
            Smart Workout Tracker 💪
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            <WorkoutForm />

            <div className="xl:col-span-2">
              <WorkoutTable />
            </div>

          </div>

        </main>

      </div>

      <ThemeToggle />

    </div>
  )
}

export default App

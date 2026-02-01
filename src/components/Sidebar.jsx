function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">

      <div className="p-6">

        <div className="flex items-center gap-2 mb-8">
          <div className="bg-primary p-2 rounded-lg">
            <span className="material-icons-round text-white">
              fitness_center
            </span>
          </div>

          <h1 className="font-display text-xl font-bold text-slate-900 dark:text-white">
            SmartTrack
          </h1>
        </div>

        <nav className="space-y-1">

          <button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium w-full">
            <span className="material-icons-round">dashboard</span>
            Dashboard
          </button>

          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full">
            <span className="material-icons-round">query_stats</span>
            Analytics
          </button>

          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full">
            <span className="material-icons-round">calendar_today</span>
            Schedule
          </button>

        </nav>

      </div>

    </aside>
  )
}

export default Sidebar

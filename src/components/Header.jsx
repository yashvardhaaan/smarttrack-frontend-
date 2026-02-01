function Header() {

  const today = new Date().toDateString()

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 
    flex items-center justify-between px-8 
    bg-white/80 dark:bg-slate-900/80 
    backdrop-blur-md sticky top-0 z-50">

      <h2 className="text-lg font-semibold font-display text-slate-900 dark:text-white">
        Overview
      </h2>

      <div className="flex items-center gap-4">

        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-icons-round text-slate-700 dark:text-slate-300">
            notifications
          </span>
        </button>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          {today}
        </span>

      </div>

    </header>
  )
}

export default Header

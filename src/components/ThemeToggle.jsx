function ThemeToggle() {

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform"
    >

      <span className="material-icons-round dark:hidden">
        dark_mode
      </span>

      <span className="material-icons-round hidden dark:block text-yellow-400">
        light_mode
      </span>

    </button>
  )
}

export default ThemeToggle

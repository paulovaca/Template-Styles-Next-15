
'use client'

import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
    >
      {theme === 'light' ? '🌙 Tema Escuro' : '☀️ Tema Claro'}
    </button>
  )
}

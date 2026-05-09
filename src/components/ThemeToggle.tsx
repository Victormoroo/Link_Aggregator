import { Moon, Sun } from 'lucide-react'
import styles from './ThemeToggle.module.css'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <div className={styles.wrapper}>
      <button
        role="switch"
        aria-checked={theme === 'light'}
        aria-label="Alternar tema claro/escuro"
        onClick={onToggle}
        className={styles.switch}
      >
        <span className={styles.track} aria-hidden="true">
          <span className={styles.thumb}>
            {theme === 'dark' ? (
              <Moon size={12} color="#6366f1" />
            ) : (
              <Sun size={12} color="#f59e0b" />
            )}
          </span>
        </span>
      </button>
    </div>
  )
}

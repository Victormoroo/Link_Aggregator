import { useTheme } from './hooks/useTheme'
import Profile from './components/Profile'
import LinkCard from './components/LinkCard'
import ThemeToggle from './components/ThemeToggle'
import { links } from './data/links'
import styles from './App.module.css'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Profile theme={theme} />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <nav aria-label="Links de perfil">
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.id}>
                <LinkCard {...link} />
              </li>
            ))}
          </ul>
        </nav>
        <footer className={styles.footer}>
          <p>Desenvolvido por Victor Moro</p>
        </footer>
      </div>
    </main>
  )
}

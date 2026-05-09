import type { LucideIcon } from 'lucide-react'
import styles from './LinkCard.module.css'

interface LinkCardProps {
  label: string
  url: string
  icon: LucideIcon
  external?: boolean
  disabled?: boolean
}

export default function LinkCard({ label, url, icon: Icon, external, disabled }: LinkCardProps) {
  const cardClass = [styles.card, disabled ? styles.disabled : ''].filter(Boolean).join(' ')

  if (disabled) {
    return (
      <span className={cardClass}>
        <Icon size={20} className={styles.icon} aria-hidden="true" />
        <span className={styles.label}>{label}</span>
        <span className={styles.badge}>em breve</span>
      </span>
    )
  }

  return (
    <a
      href={url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cardClass}
    >
      <Icon size={20} className={styles.icon} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </a>
  )
}

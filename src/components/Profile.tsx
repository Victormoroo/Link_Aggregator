import avatar from '../assets/avatar.png'
import { profileData } from '../data/links'
import styles from './Profile.module.css'

export default function Profile() {
  return (
    <section className={styles.profile} aria-label="Perfil">
      <img
        src={avatar}
        alt={`Foto de perfil de ${profileData.name}`}
        className={styles.avatar}
        width={112}
        height={112}
      />
      <h1 className={styles.name}>{profileData.name}</h1>
      <p className={styles.handle}>{profileData.handle}</p>
    </section>
  )
}

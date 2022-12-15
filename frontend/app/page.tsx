import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to Manager
        </p>
        <div>
          <a> By Me!</a>
        </div>
      </div>
      <div className={styles.center}>
        <h1 className={styles.card}>
          Welcome to Manager!
        </h1>
      </div>
    </main>
  )
}

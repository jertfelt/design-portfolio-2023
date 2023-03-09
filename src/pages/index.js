import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.scss'
import HeadIndex from '@component/components/Head'
import Header from '@component/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <HeadIndex/>
    <Header/>
      <main className={styles.main}>
  
      </main>
    </>
  )
}

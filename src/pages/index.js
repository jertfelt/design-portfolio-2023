import Image from 'next/image'
import gifImage from "../../public/TJ-GIF1-SDochNMR-hatkarlek_mindregif.gif"

import styles from '@component/styles/Home.module.scss'
import HeadIndex from '@component/components/Head'
import Header from '@component/components/Header/Header'


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

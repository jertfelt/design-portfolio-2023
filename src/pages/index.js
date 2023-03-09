
import styles from '@component/styles/Home.module.scss'
import HeadIndex from '@component/components/Head'
import Header from '@component/components/Header/Header'
import Homepage from './Homepage/Homepage'


export default function Home() {
  return (
    <>
    <HeadIndex/>
    <Header/>
      <main className="main">
      <Homepage/>
      </main>
    </>
  )
}

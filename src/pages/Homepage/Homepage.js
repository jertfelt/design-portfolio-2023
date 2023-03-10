import gifImage from "../../../public/TJ-GIF1-SDochNMR-hatkarlek_mindregif.gif"
import Image from 'next/image'

import styles from '@component/styles/Home.module.scss'

const Homepage = () => {
  return ( 
  <section className={styles.homepage}>
<div className={styles.title}>
    <h1>Tova Jertfelt</h1>
    </div>
    <Image src={gifImage}
    className={styles.image}
    alt="Animated gif illustration"
    fill
    cover
    center
   
/>
    
    

  </section> );
}
 
export default Homepage;
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss"

const Header = () => {
  return (  <header id="site_header"
  className={styles.siteheader}>
    <nav className={styles.sitenav}>
      <Image src=""
      width={200}
      height={200}
      className="homebutt"
      alt="logotyp"/>
      <span>
      <Link href="/"
      className={styles.navlink}>Hem</Link>
      <p
      id="aboutMe"
      className={styles.navlink}
      >
      Om mig
      </p>
      
      <Link href="https://www.tovajertfelt.se"
      className={styles.navlink}
      target="_blank">
        Frontend portfolio</Link>
    </span>

  </nav>
  </header>
 );
}
 
export default Header;
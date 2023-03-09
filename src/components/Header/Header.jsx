import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss"
import logo from "../../../public/logo512.png"

const Header = () => {
  return (  <header id="site_header"
  className={styles.siteheader}>
    <nav className={styles.sitenav}>
      <Link href="/">
      <Image src={logo}
      width={50}
      height={50}
      className={styles.logonav}
      alt="logotyp"/>
      </Link>
      <span>
      <Link href="/"
      className={styles.navlink}>Hem</Link>
      {/* <p
      id="aboutMe"
      className={styles.navlink}
      >
      Om mig
      </p> */}
      
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
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss"
import logo from "../../../public/logo512.png"
import Toggle from "../stylings/Toggler";
import { useContext, useEffect } from "react";
import ArtContext from "../Context/Art.Context";
import FeContext from "../Context/Frontend.Context";

const Header = ({theme, toggleTheme}) => {
  const contextFrontEnd = useContext(FeContext)
  const contextArt = useContext(ArtContext)
  const [noContext, setNoContext] = useState(false)
  useEffect(() => {
    if(!contextFrontEnd){
      if(!contextArt){
        setNoContext(true)
      }
    }
    if(contextArt){
      setNoContext(false)
    }
    if(contextFrontEnd){
      setNoContext(false)
    }
  },[])

  return (  
  <header 
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
      {contextArt && 
      <Link href="https://www.tovajertfelt.se"
      className={styles.navlink}
      target="_blank">
        Frontend portfolio</Link>}
      {contextFrontEnd && 
      <Link href="https://www.tovajertfelt.com" className="" target="_blank"/>}
      
        <Toggle 
        theme={theme} 
        toggleTheme={toggleTheme}/>
        
    </span>

  </nav>
  </header>
 );
}
 
export default Header;
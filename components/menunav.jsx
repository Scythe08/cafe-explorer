import Button from "./Button";
import styles from "./menu.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.container}>  
      <div>
        <img src="/logo/cafe_logo.png" width={60} height={60}></img> 
      </div>
      <h1>Caffeine Grounds.</h1>


      
      <div className={styles.navbarActions}>
        <Link href="http://localhost:3000">
        <Button variant="secondary">Home</Button>
        </Link>
      
       
      </div>
      <div className={styles.burgerButton}>
        <Button>burger</Button>
      </div>
    </div>
  );
};
export default Nav;

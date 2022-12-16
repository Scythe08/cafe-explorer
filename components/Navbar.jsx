import Button from "./Button";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>  
      <div>
        <img src="/logo/cafe_logo.png" width={60} height={60}></img> 
      </div>
      <h1>Caffeine Grounds.</h1>


      
      <div className={styles.navbarActions}>
        <Link href="https://cafe-explorer-ek8wa1pc2-scythe08.vercel.app/">
        <Button variant="secondary">Home</Button>
        </Link>
        <Link href="/menu">
        <Button variant="secondary">Menu</Button>
        </Link>
        <Button variant="secondary">About us</Button>
     
        <Button variant="secondary">Contact</Button>

        <Link href="/booking">
        <Button variant="primary">Book a table</Button>
        </Link>
       
      </div>
      <div className={styles.burgerButton}>
        <Button>burger</Button>
      </div>
    </div>
  );
};
export default Navbar;

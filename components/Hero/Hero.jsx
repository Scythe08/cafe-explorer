import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = ({ heading1, Order, address, }) => {
  return (
    <div className={styles.container}>
      <h1>{heading1}</h1>
      <p>{address}</p>

      <Link href="/menu" >
      <button className={styles.Hero}>{Order}</button>
      </Link>
      
      
 
      
    </div>
  );
};

export default Hero;

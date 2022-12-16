import styles from "./Hero1.module.css";
import Link from "next/link";

const Hero = ({ heading1, Order, address, first, last, email, message }) => {
  return (
    <div className={styles.container}>
      <h1>{heading1}</h1>
      <p>{address}</p>
      <div className={styles.container}>
      <label for="first">{first}</label>
      <input type="text" id="first" name="first" />
      </div>
      <div className={styles.container}>
      <label for="Last">{last}</label>
      <input type="text" id="Last" name="Last" />
      </div>
      <div className={styles.container}>
      <label for="email">{email}</label>
      <input type="text" id="email" name="email" />
      </div>
      <div className={styles.container}>
      <label for="messafe">{message}</label>
      <input type="text" id="message" name="message" />
      </div>

      <Link href="/home" >
      <button className={styles.Hero}>{Order}</button>
      </Link>
      
      
 
      
    </div>
  );
};

export default Hero;

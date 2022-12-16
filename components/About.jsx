import styles from "./About.module.css";


const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h2>About Us</h2>
        <p>
        We are the Team Explorers and we made the webapp about online coffee ordering system. We aim to make an efficient
        way of sending your favorite blends of morning beverage with just easy steps right on your doorstep. We make all kinds of coffee blends from
        authentic filipino originals to western blends at your own request. We hope you enjoy our services and {"don't"} forget to leave a feedback so that
        we can improve our skills. Thank you very much.               
        </p>
      </div>
      <div className={styles.image}>
        <img src="/images/profile.jpg" />
      </div>
    </div>
    
  );
};

export default AboutUs;

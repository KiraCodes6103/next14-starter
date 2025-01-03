import Image from "next/image";
import styles from "./about.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.aboutAgency}> About Agency </h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1> 10 k +</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1> 234 k +</h1>
            <p>People Reached</p>
          </div>
          <div className={styles.box}>
            <h1> 1 k +</h1>
            <p>Servies Offered</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default About;

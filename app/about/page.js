import styles from "../page.module.css";
import Logo from "../ui/Logo"

export default function About() {
    return (
      <main className={styles.main}>
        <Logo />
        <h2 className={styles.cool}>The progressive web app<br />to track your things.</h2>
      </main>
    );
  }
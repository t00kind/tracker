import styles from "../page.module.css";
import Logo from "../../comp/Logo"

export default function About() {
    return (
      <main className={styles.main}>
        <Logo />
        <h2>The progressive web app to track your things.</h2>
      </main>
    );
  }
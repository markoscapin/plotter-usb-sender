import styles from "../styles/Home.module.css";

export default function Home() {
  function handlePy() {
    fetch("/api/hello")
      .then((mess) => console.log(mess))
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.container}>
      <button onClick={() => handlePy()}>Click me</button>
    </div>
  );
}

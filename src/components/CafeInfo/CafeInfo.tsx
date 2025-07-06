import styles from "../CafeInfo/CafeInfo.module.css";

export default function CafeInfo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}

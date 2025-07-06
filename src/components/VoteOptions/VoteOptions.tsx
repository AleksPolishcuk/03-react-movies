import styles from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={styles.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={styles.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {canReset && (
        <button
          className={`${styles.button} ${styles.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}

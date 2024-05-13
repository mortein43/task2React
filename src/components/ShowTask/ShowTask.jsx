import styles from "./ShowTask.module.css";
import Clock from "../Clock/Clock";
export default function ShowTask({ task }) {
  return (
    <div className={styles.showTask}>
      <div className={styles.buble1}></div>
      <div className={styles.buble2}></div>
      <div className={styles.animate}>
        {task && Array.isArray(task) ? (
          <div className={styles.content}>
            <ol>
              {task.slice(0, -1).map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ol>

            <div className={styles.img}>
              {task.slice(-1).map((el, index) => (
                <img key={index} src={el} alt="Task image" />
              ))}
            </div>
          </div>
        ) : (
          <Clock />
        )}
      </div>
      <div className={styles.buble3}></div>
      <div className={styles.buble4}></div>
    </div>
  );
}

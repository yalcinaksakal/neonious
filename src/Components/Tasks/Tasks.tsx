import { useState } from "react";
import styles from "./Tasks.module.scss";

const Tasks: React.FC<{ setActiveTab: (i: number) => void; tasks: string[] }> =
  ({ setActiveTab, tasks }) => {
    const [active, setActive] = useState(0);
    const clicked = (i: number) => {
      if (i === active) return;
      setActive(i);
      setActiveTab(i);
    };
    return (
      <div className={styles.tasks}>
        {tasks.map((t, i) => (
          <span
            key={i}
            className={i === active ? styles.active : ""}
            onClick={() => clicked(i)}
          >
            {t}
          </span>
        ))}
      </div>
    );
  };

export default Tasks;

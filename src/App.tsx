import { useState } from "react";
import styles from "./App.module.scss";

import Task from "./Components/Task/Task";
import Tasks from "./Components/Tasks/Tasks";
import tasks from "./TaskDefinitionsAndFuncs/taskDefinitons";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <p className={styles.heading}>YA's answers to Neonious interview tasks</p>
      <Tasks setActiveTab={setActiveTab} tasks={tasks.map(t => t.name)} />
      <Task task={tasks[activeTab]} />
    </>
  );
};

export default App;

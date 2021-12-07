import Ace from "../Ace/Ace";
import Card from "../Card/Card";
import Iframe from "../Iframe/Iframe";
import Output from "../Output/Output";
import styles from "./Task.module.scss";
const Task: React.FC<{ task: any }> = ({ task }) => {
  let tsx;
  switch (task.type) {
    case "iframe":
      tsx = <Iframe src={task.src} title={task.src} />;
      break;
    case "text":
      tsx = (
        <Card>
          {task.questions.map((q: string, i: number) => (
            <div key={i}>
              <span style={{ color: "rgb(79, 141, 203)" }}>{`Q${
                i + 1
              }: `}</span>
              {`${q}`}
              <br />
              <br />
              <span style={{ color: "rgb(79, 141, 203)" }}>Answer:</span>
              {` ${task.answers[i]}`}
              <br />
              <br />
            </div>
          ))}
        </Card>
      );
      break;

    default:
      tsx = (
        <>
          <Card>{task.task}</Card>
          <div className={styles.output}>
            <Output func={task.code} run={task.run} />
            <Ace data={"const " + task.code.name + " = " + task.code} />
          </div>
        </>
      );
      break;
  }
  return tsx;
};

export default Task;

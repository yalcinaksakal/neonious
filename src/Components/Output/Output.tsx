import { useRef, useState } from "react";
import styles from "./Output.module.scss";

const Output: React.FC<{ func: any; run: string }> = ({ func, run }) => {
  const [output, setOuput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const evaluate = () => {
    if (!inputRef.current?.value) {
      setOuput("Input is empty, please provide an input to execute.");
      return;
    }

    let result = "";
    try {
      result = JSON.stringify(
        eval(inputRef.current.value.replace(func.name, "func"))
      );
    } catch (e) {
      result =
        e instanceof Error
          ? e.name + " : " + e.message
          : "sth went wrong, please check the input";
    }
    setOuput(result);
  };
  return (
    <div className={styles.Output}>
      <input ref={inputRef} autoFocus type="search" placeholder={run} />
      <button onClick={evaluate}>Run</button>
      <div className={styles.result}>
        <p>Output</p>
        {output}
      </div>
    </div>
  );
};

export default Output;

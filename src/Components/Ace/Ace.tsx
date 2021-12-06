import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow";

import styles from "./Ace.module.scss";

const Ace: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className={styles.editor}>
      <AceEditor
        width="100%"
        height="100%"
        wrapEnabled
        mode="javascript"
        theme="tomorrow_night_bright"
        name="ace"
        fontSize={13}
        value={data}
        readOnly
        showPrintMargin={false}
        setOptions={{ useWorker: false }}
      />
    </div>
  );
};

export default Ace;

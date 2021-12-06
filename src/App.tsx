import styles from "./App.module.scss";
import Iframe from "./Components/Iframe/Iframe";

const App = () => (
  <>
    <h4 className={styles.heading}>YA's answers to Neonious interview tasks</h4>
    <Iframe
      src="https://myleetcode.vercel.app/"
      title="YA's LeetCode solutions"
    />
    <Iframe src="https://yaprojects.netlify.app/" title="YA's Portfolio" />
  </>
);

export default App;

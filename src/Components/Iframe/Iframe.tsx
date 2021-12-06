import styles from "./Iframe.module.scss";

const Iframe: React.FC<{ src: string; title: string }> = ({ src, title }) => (
  <iframe className={styles.Iframe} src={src} title={title}></iframe>
);

export default Iframe;

const Card: React.FC = ({ children }) => (
  <div
    style={{
      width: "calc(100% - 10px)",
      margin: "0 5px",
      padding: "10px 30px",
      background: "whitesmoke",
      borderRadius: "5px",
      textAlign: "justify",
      fontSize: "14px",
    }}
  >
    {children}
  </div>
);
export default Card;

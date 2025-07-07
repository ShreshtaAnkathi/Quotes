function QuoteCard({ text, author }) {
  return (
    <div style={styles.card}>
      <p style={styles.text}>"{text}"</p>
      {/* <p style={styles.author}>— {author}</p> */}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#f4f4f4",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "12px",
  },
  text: {
    fontStyle: "italic",
    fontSize: "1.2rem",
  },
  author: {
    textAlign: "right",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default QuoteCard;

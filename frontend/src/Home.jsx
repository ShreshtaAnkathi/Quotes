
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");

  const handleSearch = () => {
    if (!author.trim()) return;
    navigate(`/random?author=${encodeURIComponent(author.trim())}`);
  };

  return (
    <div style={{ paddingTop: "2rem", textAlign: "center" }}>
      <div className="title">QUOTE OF THE DAY</div>

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <button
          onClick={() => navigate("/random")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Random Quotes
        </button>

        <input
          type="text"
          placeholder="Search by author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ padding: "8px", fontSize: "14px" }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "8px 14px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;






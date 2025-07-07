
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function RandomQuotes() {
//   const [quotes, setQuotes] = useState([]);
//   const [author, setAuthor] = useState("");
//   const [filteredQuotes, setFilteredQuotes] = useState([]);

//   useEffect(() => {
//     fetchRandomQuotes();
//   }, []);

//   const fetchRandomQuotes = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/random");
//       setQuotes(res.data);
//       setFilteredQuotes(res.data);
//     } catch (error) {
//       console.error("Error fetching random quotes:", error);
//     }
//   };

//   const handleSearch = async () => {
//     if (!author.trim()) return;
//     try {
//       const res = await axios.get(`http://localhost:5000/api/author/${author}`);
//       setFilteredQuotes(res.data);
//     } catch (error) {
//       console.error("Error fetching quotes by author:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
//         <div>
//           <input
//             placeholder="Search by author"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             style={{ padding: "6px", marginRight: "10px" }}
//           />
          
//         </div>
        
//       </div>

//       {filteredQuotes.length === 0 ? (
//         <p>No quotes found.</p>
//       ) : (
//         filteredQuotes.map((q, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               padding: "1rem",
//               marginBottom: "1rem",
//               borderRadius: "6px",
//               backgroundColor: "#f9f9f9"
//             }}
//           >
//             <h3 style={{ fontStyle: "italic" }}>"{q.body}"</h3>
//             <p style={{ textAlign: "right", fontWeight: "bold" }}>— {q.author}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default RandomQuotes;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function RandomQuotes() {
//   const [quotes, setQuotes] = useState([]);
//   const [author, setAuthor] = useState("");
//   const [filteredQuotes, setFilteredQuotes] = useState([]);

//   useEffect(() => {
//     fetchRandomQuotes();
//   }, []);

//   const fetchRandomQuotes = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/random");
//       setQuotes(res.data);
//       setFilteredQuotes(res.data);
//     } catch (error) {
//       console.error("Error fetching random quotes:", error);
//     }
//   };

//   const handleSearch = async () => {
//     if (!author.trim()) return;
//     try {
//       const res = await axios.get(`http://localhost:5000/api/author/${author}`);
//       setFilteredQuotes(res.data);
//     } catch (error) {
//       console.error("Error fetching quotes by author:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
//         <div>
//           <input
//             placeholder="Search by author"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             style={{ padding: "6px", marginRight: "10px" }}
//           />
          
//         </div>
        
//       </div>

//       {filteredQuotes.length === 0 ? (
//         <p>No quotes found.</p>
//       ) : (
//         filteredQuotes.map((q, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               padding: "1rem",
//               marginBottom: "1rem",
//               borderRadius: "6px",
//               backgroundColor: "#f9f9f9"
//             }}
//           >
//             <h3 style={{ fontStyle: "italic" }}>"{q.body}"</h3>
//             <p style={{ textAlign: "right", fontWeight: "bold" }}>— {q.author}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default RandomQuotes;

// import React, { useState, useEffect } from "react";


// THIS IS THE MAIN ONE
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function RandomQuotes() {
//   const [quotes, setQuotes] = useState([]);
//   const [author, setAuthor] = useState("");
//   const [filteredQuotes, setFilteredQuotes] = useState([]);

//   useEffect(() => {
//     fetchRandomQuotes();
//   }, []);

//   const fetchRandomQuotes = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/random");
//       setQuotes(res.data);
//       setFilteredQuotes(res.data);
//     } catch (error) {
//       console.error("Error fetching random quotes:", error);
//     }
//   };

//   const handleSearch = async () => {
//     if (!author.trim()) return;
//     try {
//       const res = await axios.get(`http://localhost:5000/api/author/${author}`);
//       setFilteredQuotes(res.data);
//     } catch (error) {
//       console.error("Error fetching quotes by author:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
//         <div>
//           <input
//             placeholder="Search by author"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             style={{ padding: "6px", marginRight: "10px" }}
//           />
          
//         </div>
        
//       </div>

//       {filteredQuotes.length === 0 ? (
//         <p>No quotes found.</p>
//       ) : (
//         filteredQuotes.map((q, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               padding: "1rem",
//               marginBottom: "1rem",
//               borderRadius: "6px",
//               backgroundColor: "#f9f9f9"
//             }}
//           >
//             <h3 style={{ fontStyle: "italic" }}>"{q.body}"</h3>
//             <p style={{ textAlign: "right", fontWeight: "bold" }}>— {q.author}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default RandomQuotes;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function RandomQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [author, setAuthor] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const authorFromQuery = params.get("author");

    if (authorFromQuery) {
      setAuthor(authorFromQuery);
      handleSearch(authorFromQuery);
    } else {
      fetchRandomQuotes();
    }
  }, []);

  const fetchRandomQuotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/random");
      setQuotes(res.data);
      setFilteredQuotes(res.data);
    } catch (error) {
      console.error("Error fetching random quotes:", error);
    }
  };

  const handleSearch = async (authorName = author) => {
    if (!authorName.trim()) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/author/${authorName}`);
      setFilteredQuotes(res.data);
    } catch (error) {
      console.error("Error fetching quotes by author:", error);
    }
  };

  return (
    <div >
   

      {filteredQuotes.length === 0 ? (
        <p></p>
      ) : (
        filteredQuotes.map((q, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3 style={{ fontStyle: "italic" }}>"{q.body}"</h3>
            <p style={{ textAlign: "right", fontWeight: "bold" }}>— {q.author}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RandomQuotes;

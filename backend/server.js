// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.get('/api/quotes/random', async (req, res) => {
//   // try {
//     const response = await axios.get('https://api.quotable.io/random');
//     res.json({
//       text: response.data.content,
//       author: response.data.author 
//     });
//   // } catch (err) {
//   //   res.status(500).json({ error: 'Failed to fetch quote' });
//   // }
// });

// app.get('/api/quotes/author', async (req, res) => {
//   const author = req.query.name;
//   if (!author) return res.status(400).json({ error: 'Author name is required' });

//   try {
//     const response = await axios.get(`https://api.quotable.io/quotes?author=${encodeURIComponent(author)}`);
//     const quotes = response.data.results.map(q => ({
//       text: q.content,
//       author: q.author
//     }));
//     res.json(quotes);
//   } catch (err) {  
//     res.status(500).json({ error: 'Failed to fetch author quotes' });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// with zenquotes
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// app.get('/api/quotes/random-multiple', async (req, res) => {
//   try {
//     const response = await axios.get('https://zenquotes.io/api/quotes');
//     const selected = response.data.slice(0, 20).map(q => ({
//       text: q.q,
//       author: q.a
//     }));
//     res.json(selected);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch quotes' });
//   }
// });

// app.get('/api/quotes/author', async (req, res) => {
//   const author = req.query.name;
//   if (!author) return res.status(400).json({ error: 'Author name is required' });

//   try {
//     const response = await axios.get('https://zenquotes.io/api/quotes');
//     const quotes = response.data.filter(q =>
//       q.a.toLowerCase().includes(author.toLowerCase())
//     ).map(q => ({
//       text: q.q,
//       author: q.a
//     }));
//     res.json(quotes);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch author quotes' });
//   }
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });



const express = require('express');
const cors = require('cors');
const quoteRoutes = require('./quote');
const app = express();
const PORT = 5000;

app.use(cors());
app.use('/api', quoteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


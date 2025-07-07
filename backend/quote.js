// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// const FAVQS_API_KEY = 'Token token="dacdb1730d078c786436f60a848f44b8"';

// router.get('/random', async (req, res) => {
//   try {
//     const response = await axios.get('https://favqs.com/api/quotes?page=1', {
//       headers: { Authorization: FAVQS_API_KEY }
//     });
//     const shuffled = response.data.quotes.sort(() => 0.5 - Math.random());
//     res.json(shuffled.slice(0, 20));
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to fetch quotes' });
//   }
// });

// router.get('/author/:author', async (req, res) => {
//   const author = req.params.author;
//   try {
//     const response = await axios.get(`https://favqs.com/api/quotes/?filter=${author}&type=author`, {
//       headers: { Authorization: FAVQS_API_KEY }
//     });
//     res.json(response.data.quotes);
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to fetch quotes by author' });
//   }
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// const FAVQS_API_KEY = 'Token token="dacdb1730d078c786436f60a848f44b8"';

// // Get random quotes
// router.get('/random', async (req, res) => {
//   try {
//     const response = await axios.get('https://favqs.com/api/quotes?page=1', {
//       headers: { Authorization: FAVQS_API_KEY }
//     });
//     const shuffled = response.data.quotes.sort(() => 0.5 - Math.random());
//     res.json(shuffled.slice(0, 20));
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to fetch quotes' });
//   }
// });

// // Get quotes by author
// router.get('/', async (req, res) => {
//   const author = req.query.author;
//   if (!author) {
//     return res.status(400).json({ error: 'Author query parameter is required' });
//   }

//   try {
//     const response = await axios.get(`https://favqs.com/api/quotes/?filter=${author}&type=author`, {
//       headers: { Authorization: FAVQS_API_KEY }
//     });
//     res.json(response.data.quotes);
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to fetch quotes by author' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const axios = require('axios');

const FAVQS_API_KEY = 'Token token="dacdb1730d078c786436f60a848f44b8"';

router.get('/random', async (req, res) => {
  try {
    const response = await axios.get('https://favqs.com/api/quotes?page=1', {
      headers: { Authorization: FAVQS_API_KEY }
    });
    const shuffled = response.data.quotes.sort(() => 0.5 - Math.random());
    res.json(shuffled.slice(0, 20));
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

router.get('/author/:author', async (req, res) => {
  const author = req.params.author;
  try {
    const response = await axios.get(`https://favqs.com/api/quotes/?filter=${author}&type=author`, {
      headers: { Authorization: FAVQS_API_KEY }
    });
    res.json(response.data.quotes);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch quotes by author' });
  }
});

module.exports = router;
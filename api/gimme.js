const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Get subreddit from query parameter
    const { subreddit } = req.query;
    
    // Build API URL
    const memeApiUrl = subreddit 
      ? `https://meme-api.com/gimme/${subreddit}` 
      : 'https://meme-api.com/gimme';
    
    console.log('Fetching from:', memeApiUrl);
    
    // Fetch meme data
    const response = await fetch(memeApiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Return the meme data
    res.status(200).json(data);
    
  } catch (error) {
    console.error('Error fetching meme:', error);
    res.status(500).json({ 
      error: 'Error fetching meme',
      message: error.message 
    });
  }
};
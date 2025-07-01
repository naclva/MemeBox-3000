const express = require('express');
const https = require('https');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Configure helmet with custom CSP to allow Reddit images
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https://i.redd.it", "https://preview.redd.it", "https://i.imgur.com"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://unpkg.com", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            connectSrc: ["'self'"]
        }
    }
}));

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// Helper to fetch meme from API
function fetchMeme(apiUrl, res) {
    https.get(apiUrl, (apiRes) => {
        let data = '';
        apiRes.on('data', (chunk) => { data += chunk; });
        apiRes.on('end', () => {
            try {
                res.set('Cache-Control', 'no-store');
                res.json(JSON.parse(data));
            } catch (e) {
                res.status(500).json({ error: 'Invalid response from meme API' });
            }
        });
    }).on('error', (err) => {
        res.status(500).json({ error: 'Error fetching meme' });
    });
}

// Route for random memes
app.get('/gimme', (req, res) => {
    fetchMeme('https://meme-api.com/gimme', res);
});

// Route for specific subreddit
app.get('/gimme/:subreddit', (req, res) => {
    const subreddit = req.params.subreddit;
    fetchMeme(`https://meme-api.com/gimme/${subreddit}`, res);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
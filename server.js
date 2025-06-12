const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, 'urls.json');

// ==========================
// Middleware Configuration
// ==========================

// Parse incoming JSON requests (e.g., from fetch)
app.use(express.json());

// Serve static files from the "public" directory (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// ==========================
// Helper Functions
// ==========================

/**
 * Generates a 6-character random alphanumeric string.
 * Used as the short code for shortened URLs.
 */
function generateShortCode() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

/**
 * Reads the URL database from the JSON file.
 * If the file doesn't exist or is invalid, returns an empty object.
 */
function readDatabase() {
    try {
        const data = fs.readFileSync(DB_PATH);
        return JSON.parse(data);
    } catch (error) {
        return {};
    }
}

/**
 * Writes the updated URL database back to the JSON file.
 * @param {Object} data - The URL mapping to write.
 */
function writeDatabase(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ==========================
// API Routes
// ==========================

/**
 * POST /api/shorten
 * Accepts a long URL and returns a shortened URL.
 */
app.post('/api/shorten', (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const db = readDatabase();
    const shortCode = generateShortCode();

    // Save the mapping: shortCode -> longUrl
    db[shortCode] = longUrl;
    writeDatabase(db);

    const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;
    res.json({ shortUrl });
});

/**
 * GET /:shortCode
 * Redirects the user to the original long URL based on shortCode.
 * This should be defined last to avoid overriding other routes.
 */
app.get('/:shortCode', (req, res) => {
    const { shortCode } = req.params;
    const db = readDatabase();

    const longUrl = db[shortCode];

    if (longUrl) {
        console.log(`🔁 Redirecting: ${shortCode} → ${longUrl}`);
        res.redirect(301, longUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

// ==========================
// Start Server
// ==========================

app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
});

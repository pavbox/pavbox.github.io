const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Constants
const PORT = 9000;  // Changed to a standard HTTP port

// Initialize Express app
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set paths
const __srcpath = path.join(__dirname, './../');
const __distpath = path.join(__dirname, './../../dist/');

// Routes
app.get('/lera_congrats', (req, res) => {
    new fs.ReadStream(path.join(__distpath, 'lera_congrats.html')).pipe(res);
});

app.get('/NY22', (req, res) => {
    new fs.ReadStream(path.join(__distpath, 'NY22.html')).pipe(res);
});

app.get('/NY22/benzo', (req, res) => {
    new fs.ReadStream(path.join(__distpath, 'benzo.html')).pipe(res);
});

app.get('/', (req, res) => {
    new fs.ReadStream(path.join(__distpath, 'index.html')).pipe(res);
});

// Static file handling with proper content types
app.get('*', (req, res) => {
    const contentTypes = {
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.svg': 'text/xml',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif'
    };

    try {
        const filePath = path.join(__distpath, req.url);
        const ext = path.extname(req.url);
        
        if (contentTypes[ext]) {
            res.setHeader('Content-Type', contentTypes[ext]);
        }

        if (fs.existsSync(filePath)) {
            new fs.ReadStream(filePath).pipe(res);
        } else {
            res.redirect('/');
        }
    } catch (error) {
        console.error('Error serving file:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
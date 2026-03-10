const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// SharedArrayBuffer (Godot 4 WASM) headers
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    next();
});

// Serve static files from 'src'
app.use(express.static(path.join(__dirname, 'src')));

// Redirect all requests to index.html (SPA support if needed)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Serving from: ' + path.join(__dirname, 'src'));
});

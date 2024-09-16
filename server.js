const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, 'dist')));

// Handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Use the environment variable PORT, or default to 3000 if it's not set
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

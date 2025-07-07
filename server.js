// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// API route to return product data from products.json
app.get('/api/products', (req, res) => {
  const data = fs.readFileSync('products.json', 'utf-8');
  res.json(JSON.parse(data));
});

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        return console.error(`❌ Error starting server: ${err.message}`);
    }else{
 console.log(`✅ Server is running at http://localhost:${PORT}`);
    }
 
});

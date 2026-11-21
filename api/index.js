const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Cloud Integration API - Muhammad Rais Ardhani (Vercel)');
});

app.get('/api/data', (req, res) => {
    res.json({
        status: 'success',
        message: 'Data berhasil diakses',
        source: 'Cloud Application (Vercel)'
    });
});

module.exports = app;

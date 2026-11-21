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

app.get('/api/hybrid-data', async (req, res) => {
    try {
        const response = await fetch(
            `${process.env.LOCAL_API_URL}/api/local-data`
        );

        if (!response.ok) {
            throw new Error('Local API tidak merespons');
        }

        const data = await response.json();

        res.json({
            status: 'success',
            integration: 'Hybrid Cloud',
            local_data: data
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = app;

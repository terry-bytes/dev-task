const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/process', (req, res) => {
    const { data } = req.body;

    if (typeof data !== 'string') {
        return res.status(400).json({ error: 'Invalid data format' });
    }

    // Convert string to array of characters
    let characters = data.split('');

    // Sort the array alphabetically
    characters.sort();

    // Send the response
    res.json({ word: characters });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

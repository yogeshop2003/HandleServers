const express = require('express');
const app = express();
const port = 8082;

app.get('/', (req, res) => {
    res.send('type /time to get a output for a linear time complexed algo.');
});

app.get('/time', (req, res) => {
    const start = Date.now();

    // Linear time complexity algorithm
    const array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i);
    }

    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        totalSum += array[i];
    }

    const end = Date.now();
    const duration = (end - start) / 1000; // Convert to seconds

    res.send(`Node js Run time: ${duration} seconds`);
});

app.get('/yogesh', (req, res) => {
    res.redirect(302, 'https://www.leetcode.com/yogeshop2003');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
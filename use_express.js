const { readFile, readFileSync } = require('fs');

const express = require('express');

const app = express();

app.get('/', (request, response) => {
    readFile('./page.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('Out of order')
        }
        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log(`Page available at http://localhost:3000`));
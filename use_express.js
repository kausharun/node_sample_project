const { readFile, readFileSync } = require('fs').promises;

const express = require('express');

const app = express();

app.get('/', async (request, response) => {
    response.send( await readFile('./page.html') );
});

app.listen(process.env.PORT || 3000, () => console.log(`Page available at http://localhost:3000`));
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let count = 0;
    try {
        count = parseInt(fs.readFileSync('count-home.txt', 'utf-8'));
    } catch (err) {

    }

    count++;

    res.send(`<h1>Главная страница</h1><p>Количество просмотров: ${count}</p><a href="/about">О сайте</a>`);

    fs.writeFileSync('count-home.txt', count.toString());
});

app.get('/about', (req, res) => {
    let count = 0;
    try {
        count = parseInt(fs.readFileSync('count-about.txt', 'utf-8'));
    } catch (err) {

    }

    count++;

    res.send(`<h1>О сайте</h1><p>Количество просмотров: ${count}</p><a href="/">Главная страница</a>`);

    fs.writeFileSync('count-about.txt', count.toString());
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
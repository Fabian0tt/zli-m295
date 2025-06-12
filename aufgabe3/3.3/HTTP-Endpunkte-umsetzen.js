import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

const names = [
    "Anna", "Ben", "Chris", "Diana", "Emil", "Fiona", "Gustav", "Hannah", "Isabel", "Jan",
    "Klara", "Lars", "Mona", "Nico", "Olga", "Paul", "Quentin", "Rosa", "Simon", "Tina",
    "Uwe", "Vera", "Willi", "Xenia", "Yannick", "Zara"
];

app.get('/now', (req, res) => {
    const now = new Date().toISOString(); // ISO-Format der aktuellen Zeit

    res.status(200) // OK
        .type('application/json') // Content-Type Header
        .json({ currentTime: now });
});

app.get('/zli', (req, res) => {
    res.redirect( 'https://www.zli.ch');
});

app.get('/name', (req, res) => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const chosenName = names[randomIndex];
    res.status(200)
        .type('application/json')
        .json({ name: chosenName });
});

app.get('/image',(req, res)=>{
    fs.readFile('Bild.jpg', function (err, image){
        res.writeHead(200, {'Content-Type': 'Bild.jpg'});
        res.end(image);
    })
})

app.get('/teapot', (req, res)=>{
    res.status(418).json({message: "I'm a teapot"});
});


app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
import express from "express";

const app = express();
const port = 3000;

const names = [
    "Anna", "Ben", "Chris", "Diana", "Emil", "Fiona", "Gustav", "Hannah", "Isabel", "Jan",
    "Klara", "Lars", "Mona", "Nico", "Olga", "Paul", "Quentin", "Rosa", "Simon", "Tina",
    "Uwe", "Vera", "Willi", "Xenia", "Yannick", "Zara"
];

app.get('/now',(req,res)=> {
    const tz = req.query.tz || 'UTC';
    const now = new Date().toLocaleString('de-DE', { timeZone: tz });

    res.json({
        timezone: tz,
        time: now
    });
});


app.post('/names', (req, res) => {
    const chosenName = req.body.name;

    if (!chosenName) {
        return res.status(400).json({ error: 'Kein Name angegeben' });
    }

    names.push(chosenName);

    res.status(200)
        .type('application/json')
        .json({ name: chosenName });
});

app.get('/names', (req, res) => {
    res.json(names);
});


app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
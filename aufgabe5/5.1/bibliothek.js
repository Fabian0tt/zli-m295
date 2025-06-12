import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

let books = [
    {
        "title": "\"Der kleine Prinz\"",
        "author": "Antoine de Saint-Exupéry",
        "isbn": "978-3-257-21034-3",
        "year": 1943,
        "description": "Ein poetisches Märchen über Freundschaft, Liebe und das Wesentliche im Leben."
    },
    {
        "title": "\"Die unendliche Geschichte\"",
        "author": "Michael Ende",
        "isbn": "978-3-522-20202-1",
        "year": 1979,
        "description": "Ein Junge entdeckt ein magisches Buch, das ihn in eine fantastische Welt zieht."
    },
    {
        "title": "\"Harry Potter und der Stein der Weisen\"",
        "author": "J.K. Rowling",
        "isbn": "978-3-551-55651-0",
        "year": 1997,
        "description": "Ein Junge entdeckt, dass er ein Zauberer ist, und beginnt seine Ausbildung in Hogwarts."
    },
    {
        "title": "\"1984\"",
        "author": "George Orwell",
        "isbn": "978-3-518-47000-8",
        "year": 1949,
        "description": "Ein dystopischer Roman über Überwachung, Kontrolle und den Verlust von Freiheit."
    },
    {
        "title": "\"Faust\"",
        "author": "Johann Wolfgang von Goethe",
        "isbn": "978-3-15-000001-4",
        "year": 1808,
        "description": "Ein Gelehrter schließt einen Pakt mit dem Teufel, um mehr über das Leben zu erfahren."
    },
    {
        "title": "\"Momo\"",
        "author": "Michael Ende",
        "isbn": "978-3-522-17750-3",
        "year": 1973,
        "description": "Ein Mädchen kämpft gegen die grauen Herren, die den Menschen die Zeit stehlen."
    },
    {
        "title": "\"Der Hobbit\"",
        "author": "J.R.R. Tolkien",
        "isbn": "978-3-608-93819-5",
        "year": 1937,
        "description": "Bilbo Beutlin begibt sich auf eine gefährliche Reise, um einen Drachen zu bezwingen."
    },
    {
        "title": "\"Stolz und Vorurteil\"",
        "author": "Jane Austen",
        "isbn": "978-3-15-000001-4",
        "year": 1813,
        "description": "Eine Liebesgeschichte im England des 19. Jahrhunderts mit gesellschaftlicher Kritik."
    },
    {
        "title": "\"Die Verwandlung\"",
        "author": "Franz Kafka",
        "isbn": "978-3-596-51260-5",
        "year": 1915,
        "description": "Gregor Samsa wacht eines Tages als Käfer auf und wird von seiner Familie entfremdet."
    },
    {
        "title": "\"Der alte Mann und das Meer\"",
        "author": "Ernest Hemingway",
        "isbn": "978-3-548-60101-0",
        "year": 1952,
        "description": "Ein alter Fischer kämpft auf dem offenen Meer gegen einen riesigen Marlin."
    }
];

app.get('/books',(req, res)=> {
    res.json(books)
});

app.get('/books/:isbn',(req, res)=> {
    const isbn = req.params.isbn;
    res.json(books.find(b => b.isbn === isbn));
});

app.post('/books',(req, res) => {
    const newBook = req.body;
    if (!newBook.title || !newBook.author || !newBook.isbn) {
        return res.status(422).json({ error: "title, author und isbn sind Pflichtfelder" });
    }
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:isbn', (req, res)=>{
    const isbn = req.params.isbn;
    const updatedBook = req.body;

    if (!updatedBook.title || !updatedBook.author || !updatedBook.isbn) {
        return res.status(422).json({error: "title, author und isbn sind Pflichtfelder"})
    }
    const index = books.findIndex(b => b.isbn === isbn);

    if (index === -1) {
        return res.status(404).json({ error: "Buch nicht gefunden" });
    }

    books[index] = updatedBook;
    res.json(updatedBook);
});

app.delete('/books/:isbn', (req, res)=> {
    const isbn = req.params.isbn
    const index = books.findIndex(b => b.isbn === isbn);

    if (index === -1) {
        return res.status(404).json({ error: "Buch nicht gefunden" });
    }
    const deletedBook = books.splice(index, 1)[0];
    res.json(deletedBook);
});

app.patch('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const updates = req.body;

    const book = books.find(b => b.isbn === isbn);

    if (!book) {
        return res.status(404).json({ error: "Buch nicht gefunden" });
    }

    if (updates.title !== undefined) book.title = updates.title;
    if (updates.author !== undefined) book.author = updates.author;
    if (updates.year !== undefined) book.year = updates.year;
    if (updates.description !== undefined) book.description = updates.description;

    res.json(book);
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
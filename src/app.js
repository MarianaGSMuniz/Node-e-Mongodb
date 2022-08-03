import { Express } from "express";

const app = express();

const livros = [
    {id1, "titulo": "O Senhor dos Anéis", "autor": "J.R.R. Tolkien"},
    {id2, "titulo": "Fundação", "autor": "Isaac Asimov"},
    {id3, "titulo": "O Poderoso Chefão", "autor": "Franz Kafka"},

]

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get ('/livros', (req, res) => {
    res.status(200).json(livros);
})


app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('livro cadastrado');
    
})



export default app;

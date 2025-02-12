//! questo file js Contiene la logica per la gestione delle rotte relative ai post

//task importo express
const express = require("express");

//task creo istanza tramite la classe express.Router()
const blog = express.Router()

//task importo i posts da data.js
const posts = require("../public/data")


//task raccolgo tutte le rotte qui(REST) facendo riferimento alla variabile sopra 

//* index (read)
blog.get('/', function (req, res) {
    res.json(posts);// lista di tutti i post in formato json
});

//* show (read)
blog.get('/:id', function (req, res) {
    // res.send('Dettagli del post ' + req.params.id);
    console.log(req.params.id); //* "req.params.id" ==> è un modo per accedere a parametri che vengono passati nell'URL di una richiesta in maniera dinamica!
    const id = req.params.id
    res.json(posts[id]);
});

//* store (create) (piu in uso in un ambiente database)
blog.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

//* update (update)
blog.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

//* modify/patch (update)
blog.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

//* destroy (delete)
blog.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

module.exports = blog

//task importo i posts da data.js
const posts = require("../data/data")

//* index (read)
function index(req, res) {

    //* logica dell'index
    // res.json(posts);// lista di tutti i post (o un filtro) in formato json

    //faccio coincidere filteredPosts con l'array iniziale
    let filteredPosts = posts;

    // Se la richiesta contiene un filtro(req.query.tags = true/false => booleano), allora filtriamo i post
    if (req.query.tags) {
        filteredPosts = posts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }

    // restituisco l'array filteredPosts, filtrato o meno!
    res.json(filteredPosts);
};

//* show (read)
function show(req, res) {
    // res.send('Dettagli del post ' + req.params.id);
    // console.log(req.params.id); //* "req.params.id" ==> è un modo per accedere a parametri che vengono passati nell'URL di una richiesta in maniera dinamica!
    // res.json(posts[req.params.id]);

    const findPost = posts.find((post) => post.id === parseInt(req.params.id))

    //controllo
    if (!findPost) {
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    res.json(findPost)

};

//* store (create) (piu in uso in un ambiente database)
function store(req, res) {
    res.send('Creazione nuovo post');
};

//* update (update)
function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
};

//* modify/patch (update)
function patch(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
};

//* destroy (delete)
function destroy(req, res) {
    // res.send('Eliminazione del post ' + req.params.id);
    const deletedPost = posts.find((post) => post.id === parseInt(req.params.id))

    //controllo
    if (!deletedPost) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    //Rimuoviamo il post
    posts.splice(posts.indexOf(deletedPost), 1);


    //Restituiamo lo stato corretto
    res.sendStatus(204, console.log(posts))

};

module.exports = { index, show, store, update, patch, destroy }
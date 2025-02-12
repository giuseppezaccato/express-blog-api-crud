
//task importo express
const express = require("express");
const app = express();
const port = 3000;


//task a questo punto mi basta importare direttamente il modulo corrispondente all'esportazione di posts.js=> blog
const postRouter = require("./routers/posts");

//task accesso all'asset statico "public"
app.use(express.static('public'));

//task "monto" il router postsRouter sul percorso /posts
//* tutte le rotte definite all'interno del modulo postsRouter saranno accessibili sotto il PREFISSO "/posts"
app.use("/posts", postRouter);

//task avvio il server e lo lascio in ascolto su "port" (3000)
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});


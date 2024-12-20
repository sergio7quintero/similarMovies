const path = require ("path");
const express = require ("express")
const app = express();
const getSimilarMovies = require("./utils/movie")

// PORT
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../Public")));

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "../Public/html/index.html"));
});

app.get("/movie", (req, res) => {
    if (!req.query.search) {
        res.send({
            error: "Something went wrong",
        });
return;
}

getSimilarMovies(req.query.search, (error, data) => {
if (error) {
res.send({
error: "Something went wrong",
});
return;
}
res.send(data);
});
});

app.get("*", (req, res) => {
res.render("404", {
title: "404",
name: "Sergio Quintero",
errorMessage: "Page not Found"
})
})



app.listen(port, () => {
console.log('Server is running on ' + port);
});
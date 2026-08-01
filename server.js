const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Sample API to search movies
const movies = [
    { id: 1, title: "Avatar" },
    { id: 2, title: "Avengers: Endgame" },
    { id: 3, title: "Interstellar" },
    { id: 4, title: "Inception" },
    { id: 5, title: "The Batman" }
];

app.get("/api/movies/search", (req, res) => {
    const query = (req.query.q || "").toLowerCase();

    const results = movies.filter(movie =>
        movie.title.toLowerCase().includes(query)
    );

    res.json(results);
});

// Start server
app.listen(PORT, () => {
    console.log(`MovieZone server running on http://localhost:${PORT}`);
});
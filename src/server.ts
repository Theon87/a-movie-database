// DEPENDENCIES 
import express from 'express';
// import { QueryResult } from 'pg';
import { pool, connectToDb } from './connections.js';

// INTERFACES


// DATA
await connectToDb();


// APP/PORT
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
// GET /api/movies - list of all the movies
app.get("/api/movies", (req, res) => {
    res.json("a list of all the movies")
})
// Query database

// Default response for any other request (Not Found)

app.use((_req, res) => {
    res.status(404).send("nothing found here");
});

// START THE SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// DEPENDENCIES 
import express from 'express';
import { QueryResult } from 'pg';


// INTERFACES


// DATA
import { pool, connectToDb } from './connections.js';
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
app.get("/api/movies", (_req, res) => {
    pool.query("SELECT * FROM movies", (err: Error, result: QueryResult) => {
        if(err){
            console.log(err);
            res.status(500).json("something went wrong");
        }
        res.json(result.rows);
    })    
});

// GET /api/movie-reviews renders a list of all reviews with movie data.
app.get("/api/movie-reviews", (_req, res) => {
    res.json({message: "a list of all the reviews with movie data"})
});

// POST /api/add-movie adds a movie when tested using Insomnia.
app.post("/api/add-movie", (_req, res) => {
    res.json({message: "a movie was added!"})
});

// DELETE /api/movie/:id deletes a route when tested using Insomnia.
app.delete("/api/movie/:id", (_req, res) => {
    res.json({message: "a movie was deleted!"})
});

// Query database

// Default response for any other request (Not Found)
app.use("*",(_req, res) => {
    res.status(404).send("nothing found here");
    console.log("working!");
});

// START THE SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
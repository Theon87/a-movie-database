-- SELECT columns (from one or many tables)
-- FROM tables
-- JOIN another_table
-- ON table.column = another_table.column;

-- get all movies with reviews
SELECT *
FROM movies JOIN reviews 
ON movies.id = reviews.movie_id;

-- get all movies
SELECT * FROM movies;


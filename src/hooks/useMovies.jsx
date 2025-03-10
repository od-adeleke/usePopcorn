import {useState, useEffect} from 'react'

const APIKEY = "c70616b0";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // callback function to handle closing of movie details window
    // callback?.()

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${APIKEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        console.error(err.message);
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (!query.length || query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    
    // handleCloseMovie
    fetchMovies();

    return function () {
      controller.abort(); //clean up data fetching
    };
  }, [query]);

  return {movies, isLoading, error}
}

// use named export for custom hooks, use default export for components

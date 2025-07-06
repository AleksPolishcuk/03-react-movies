// App.tsx
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MovieModal from "../components/MovieModal/MovieModal";
import { fetchMovies } from "../services/movieService";
import type { Movie } from "../types/movie";

export default function App() {
  const [, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      toast.error("Please enter your search query.");
      return;
    }
    setQuery(query);
    setMovies([]);
    setIsLoading(true);
    setError(false);

    try {
      const results = await fetchMovies(query);
      if (results.length === 0)
        toast.error("No movies found for your request.");
      setMovies(results);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={setSelectedMovie} />
      )}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
      <Toaster position="top-right" />
    </>
  );
}

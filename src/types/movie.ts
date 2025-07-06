import axios from "axios";
import type { ReactNode } from "react";

export interface Movie {
  poster_path: any;
  backdrop_path: unknown;
  vote_average: ReactNode;
  id: number;
  title: string;
  overview: string;
  release_date: string;
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get(BASE_URL, {
    params: { query },
    headers: {},
  });

  return response.data.results;
}

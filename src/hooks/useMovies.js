import { useState, useEffect } from "react";
import fetchMovies from "../services/movieService";

const useMovies = (categoryOrId, isMovieDetail = false) => {
    const [movieList, setMovieList] = useState([]);
    const [movieDetail, setMovieDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true);

            try {
                const data = await fetchMovies(categoryOrId, isMovieDetail);
                
                if (isMovieDetail) {
                    setMovieDetail(data);
                } else {
                    setMovieList(data);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
            
            setLoading(false);
        };

        loadMovies();
    }, [categoryOrId, isMovieDetail]);

    return { movieList, movieDetail, loading };
};

export default useMovies;
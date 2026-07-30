const fetchMovies = async (categoryOrId, isMovieDetail = false) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2RjMTRkZGYzNDM2NDRiMzcyMDhkMTQyNDAwODQwYyIsIm5iZiI6MTczMDA0MjUwMC41Njc4MzIsInN1YiI6IjY3MWU1N2M5YTRhYzhhNDMyYzVjYTg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JRjWvGZHCj8eGgYV4nf-xhT_wSX3tfSBkaPtvhBkWUA",
      },
    };

    const url = isMovieDetail
      ? `https://api.themoviedb.org/3/movie/${categoryOrId}/videos?language=en-US`
      : `https://api.themoviedb.org/3/movie/${categoryOrId}?language=en-US&page=1`;

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (isMovieDetail) {
      return data.results[0];
    } else {
      return data.results;
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return isMovieDetail ? null : [];
  }
};

export default fetchMovies;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function MoviePage() {
  const params = useParams();
  const id = params.id;
  const [movie, setMovie] = useState(null);
  const API_KEY = "8ec77365";

  async function getMovie(searchTerm) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function grabMovie() {
      await setMovie(getMovie(id));
    }
    grabMovie();
  }, []);

  console.log(movie);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          border: "2px solid green",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {movie && (
          <>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} />
          </>
        )}
      </div>
      <div
        style={{
          border: "2px solid red",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>CRUD part with 'reviews'</h1>
      </div>
    </div>
  );
}

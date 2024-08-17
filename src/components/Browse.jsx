import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  const movies = useNowPlayingMovies();
  console.log("🚀 ~ Browse ~ movies:", movies);

  return (
    <div>
      <h1>Browse</h1>
    </div>
  );
};

export default Browse;

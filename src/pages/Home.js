import {Loader }from 'components/Loader/Loader';
import { Error } from 'components/Error';
import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/FetchApi';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function uploadTrends() {
      setIsLoading(true);
      try {
        const trends = await fetchTrendMovies();

        if (!trends.total_results) {
          throw new Error('Sorry, there are no trending movies at the moment. Please, try later');
        } else {
          setTrendMovies(trends.results);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    uploadTrends();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error && <Error>{error} There are not movies</Error>}
      <MoviesList movies={trendMovies} />
    </>
  );
};

export default Home;
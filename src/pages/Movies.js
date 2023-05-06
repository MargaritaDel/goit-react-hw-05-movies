import { useEffect, useState } from 'react';
import { fetchSearch } from 'services/FetchApi';
import  Error  from 'components/Error/Error';
import {Loader} from 'components/Loader/Loader';
import SearchFormSubmit from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import {TrendingMoviesList} from './Home/Home.styled'

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!query) return;
    async function uploadMovies(query) {
      setIsLoading(true);
      try {
        const data = await fetchSearch(query);
        const movies = data.results;
        if (!data.total_results) {
          throw new Error('No data');
        } else {
          setMovies(movies);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    uploadMovies(query);
  }, [query]);

  const onSubmit = inputValue => {
    if (!inputValue) {
      setSearchParams({});
      setMovies([]);
    } else {
      setSearchParams({ query: inputValue });
    }
  };

    return (
        <TrendingMoviesList>
        {error && <Error>{error} There are not movies</Error>}
      <SearchFormSubmit onSubmit={onSubmit} query={query} />
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
      </TrendingMoviesList>
    );
  };
export default Movies;






  

  

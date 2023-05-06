import { Link, useLocation } from 'react-router-dom';
import { MovieItem, MovieItemList } from './MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieItemList>
      {movies.map(({ id,  poster_path,original_title }) => (
        <MovieItem key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}  <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={original_title}
            width="300"
          />
          </Link>
        </MovieItem>
      ))}
    </MovieItemList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
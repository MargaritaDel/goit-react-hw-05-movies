import {Loader} from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import NotFound from '../../components/NotFound/NotFound';
import { Suspense} from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'services/FetchApi';
import {
  GenresList,
  LinkButton,
  MovieImg,
  MovieInformation,
  MovieInformationText,
  MovieMoreInformation,
} from './MovieDetails.styled';
import { TiArrowBackOutline } from 'react-icons/ti';
// import { GiTargetPoster } from 'react-icons/gi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  let locationValue = location.state;
    if (location.state) {
      locationValue = location.state.from;
    }
    const [from, setFrom] = useState(location.state?.from ?? "/");

  useEffect(() => {
    async function uploadMovie(movieId) {
      setIsLoading(true);
      try {
        const movie = await fetchMovie(movieId);
        if (!movie) {
          throw new Error('No data');
        } else {
          setMovie(movie);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    uploadMovie(movieId);
  }, [movieId]);

  const {
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movie;

  const year = release_date ? new Date(release_date).getFullYear() : '';
  const userScore = vote_average ? Math.round(vote_average * 10) : '';

  return (
    <>
    {poster_path && (
  <LinkButton to={from} setFrom={setFrom} locationValue={locationValue}>
    <TiArrowBackOutline />  Go back
  </LinkButton>
)}
      {isLoading && <Loader />}
      {error ? (
        <NotFound>{error} Sorry, we don't have that movie</NotFound>
      ) : (
        <MovieInformation>
          {poster_path ? (
            <MovieImg
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={original_title}
              width="300"
            />
          ) : (
            <p>Not found</p>
          )}
          <MovieInformationText>
            <h1>
              {original_title} {year ? `(${year})` : ''}
            </h1>
            <p>User score: {userScore ? `${userScore}%` : ''}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <GenresList>
              {genres &&
                genres.map(({ name, id }) => <li key={id}>{name}</li>)}
            </GenresList>
          </MovieInformationText>
        </MovieInformation>
      )}
      {error ? (
  <p> </p>
) : (
  <>
    <MovieInformation>
    </MovieInformation>
    {movie && (
      <MovieMoreInformation>
        <p>Additional information</p>
        <ul>
          <li>
            <LinkButton to="cast">Cast</LinkButton>
          </li>
          <li>
            <LinkButton to="review">Review</LinkButton>
          </li>
        </ul>
      </MovieMoreInformation>
    )}
    <Suspense>
      <Outlet />
    </Suspense>
  </>
)}
    </>
  );
};

export default MovieDetails;



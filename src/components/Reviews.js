import {Loader} from 'components/Loader/Loader';
import { Error } from 'components/Error';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'services/FetchApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function uploadReview(movieId) {
      setIsLoading(true);
      try {
        const data = await fetchReview(movieId);
        const reviews = data.results;
        if (!reviews.length) {
          throw new Error(`We don't have any reviews for this movie.`);
        } else {
          setReviews(reviews);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    uploadReview(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error>{error} There are not movies</Error>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

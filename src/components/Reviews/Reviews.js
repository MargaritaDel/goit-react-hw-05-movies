import {Loader} from 'components/Loader/Loader';
import Error  from 'components/Error/Error';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'services/FetchApi';
import { ReviewList, ReviewListItem, Author} from '../Reviews/Reviews.styled'

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
      <ReviewList>
        {reviews.map(({ id, author, content }) => (
          <ReviewListItem key={id}>
            <Author>{author}</Author>
            <p>{content}</p>
          </ReviewListItem>
        ))}
      </ReviewList>
    </div>
  );
};

export default Reviews;

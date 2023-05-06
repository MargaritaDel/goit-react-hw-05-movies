
import {  useLocation } from 'react-router-dom';
import { PageNotFound, PageNotFoundText } from './Error.styled';

const Error = () => {
  const location = useLocation();

  return (
    <div>
      <PageNotFound>Oops! Not Found</PageNotFound>
      {location.state?.movieNotFound ? (
        <PageNotFoundText>
          Sorry, the movie you are looking for does not exist.
        </PageNotFoundText>
      ) : (
        <PageNotFoundText>
          Sorry, the page you are looking for does not exist.
        </PageNotFoundText>
      )}
    </div>
  );
};

export default Error;
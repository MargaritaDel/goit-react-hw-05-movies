
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageNotFound, PageNotFoundText } from './NotFound.styled';
import { TiArrowBackOutline } from 'react-icons/ti';

const NotFound = () => {
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(!location.state?.from);

  return (
    <div>
      {showBackButton && (
        <Link to="/" onClick={() => setShowBackButton(false)}>
          <TiArrowBackOutline/>Return
        </Link>
      )}
      <PageNotFound>Oops! Not Found</PageNotFound>
      {location.state?.movieNotFound ? (
        <PageNotFoundText>
          Sorry, the movie you are looking for does not exist.
        </PageNotFoundText>
      ) : (
        <PageNotFoundText>
          Sorry, the movie  you are looking for does not exist.
        </PageNotFoundText>
      )}
    </div>
  );
};

export default NotFound;
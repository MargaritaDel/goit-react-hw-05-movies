
import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import { PageNotFound, PageNotFoundText, LinkReturn} from './NotFound.styled';
import { TiArrowBackOutline } from 'react-icons/ti';

const NotFound = () => {
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(!location.state?.from);

  return (
    <div>
      {showBackButton && (
        <LinkReturn to="/" onClick={() => setShowBackButton(false)}>
          <TiArrowBackOutline/>Return
        </LinkReturn>
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
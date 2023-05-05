import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import  Cast  from './Cast/Cast';
import Reviews from './Reviews';
import Layout from './Layout/Layout';


export const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="review" element={<Reviews />} />
      </Route>
    </Route>
  </Routes>
  );
};
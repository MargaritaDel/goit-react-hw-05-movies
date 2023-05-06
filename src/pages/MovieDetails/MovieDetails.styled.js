import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = styled(Link)`
  display: flex;
  width: 300px;
  height: 100px:
  align-items: center;
  font-size: 20px;
  border: 1px solid #0d57aa;
  border-radius: 6px;
  margin-bottom: 8px;
  text-align: center;
  background-color: #b5d1f2;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:hover,
  &:focus {
    background-color: yellow;
    color: blue;

`;

export const MovieInformation = styled.div`
  @media screen and (min-width: 980px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const MovieImg = styled.img`
  width: 300px;
`;

export const MovieInformationText = styled.div`
  @media screen and (min-width: 980px) {
    width: calc(100% - 300px - 20px);
  }
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 12px;
`;

export const MovieMoreInformation = styled.div`
  margin: 0 -20px;
  padding: 5px 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
`;
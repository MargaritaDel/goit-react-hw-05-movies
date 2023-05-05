import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  width: 300px;
`;

export const SearchInput = styled.input`
padding: 4px;
width: 400px;
border-radius: 8px;
font-size: 16px;
&:focus {
  background-color: yellow;
  color: blue;
}
`;

export const SubmitButton = styled.button`
padding: 4px 8px;
border-radius: 8px;
font-size: 16px;
&:hover,
&:focus {
  color: blue;
  background-color: yellow;
}
`;
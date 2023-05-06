import styled from 'styled-components';

export const SearchForm = styled.form`
text-align: center;
padding-bottom: 35px;
`;

export const SearchInput = styled.input`
padding: 4px;
// width: 400px;
border-radius: 20px; 
font-size: 16px;
&:focus {
  background-color: grey;
  color: rgb(0, 31, 51);
}
`;

export const SubmitButton = styled.button`
padding: 4px 8px;
border-radius: 20px; 
font-size: 16px;
// width: 400px;
&:hover,
&:focus {
  color:rgb(0, 31, 51);
  background-color: yellow;
}
`;
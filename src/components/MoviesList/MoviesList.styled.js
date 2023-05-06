import styled from 'styled-components';

export const MovieItem = styled.li`
display:flex;
color: white;;
padding: 7px 20px;
max-width: 250px;
border-radius: 8px;
box-shadow: 2px 1px 9px 0px #000000;
transition: all 250ms linear;
text-decoration-line: none;
list-style-type: none; 
margin-bottom:10px;
&:hover,
&:focus {
  background-color: yellow;
  color: white;
  transform: scale(1.01);
  font-size: 16px;
  font-weight: 500;
}

`;

export const MovieItemList = styled.ul`
display:flex;
flex-wrap: wrap;
flex-direction: row-reverse;
color:white;

}

`;
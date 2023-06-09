import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  margin-top: 30px;
  display: flex;
  
  gap: 40px;
  flex-wrap: wrap;
  border-radius: 8px;
box-shadow: 2px 1px 9px 0px #000000;
`;

export const CastItem = styled.li`
  width: 250px;
border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 2px 1px 9px 0px #000000;
  align-items: center;
  text-align: center;
`;
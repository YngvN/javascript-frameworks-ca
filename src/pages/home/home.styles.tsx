import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // Centers items on the line
  gap: 20px; // Adds space between items
  padding: 0;
  margin: 20px 0; // Adds some space above and below the list
  list-style-type: none; // Removes default list styling

  @media (max-width: 768px) {
    justify-content: space-around; // Adjusts spacing for smaller screens
  }
`;

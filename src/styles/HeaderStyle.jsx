import styled from "styled-components";
import backgroundImage from "src/assets/koreateamheader.png";

export const HeaderContainer = styled.header`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  height: 250px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

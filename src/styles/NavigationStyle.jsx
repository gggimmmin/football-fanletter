import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: #e6002d;
  padding: 20px 0;
`;

export const NavBtn = styled.button`
  font-size: 20px;
  padding: 5px;
  border-radius: 15px;
  border: none;
  background-color: #e6002d;
  background-color: ${(props) => (props.active ? "#ffffff" : "#e6002d")};
  color: ${(props) => (props.active ? "#e6002d" : "#ffffff")};
`;

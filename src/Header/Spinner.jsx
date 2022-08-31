import React from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: "Hachi Maru Pop", cursive;
  font-size: 2rem;
  cursor: pointer;
  color: #fc2861;
  margin-top:2em;
  ${mobile({ fontSize: "20px", marginLeft: "5px" })}
`;

const Spin = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Spinner = () => {
  return (
    <Container>
      <Logo>
        <span style={{ color: "blue" }}>baby</span>ME
      </Logo>
      <Spin>
      <CircularProgress/>
      </Spin>
    </Container>
  );
};

export const Fallback = React.memo(Spinner);

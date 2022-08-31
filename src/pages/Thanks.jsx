import React from "react";
import styled from "styled-components";
import Confetti from "react-confetti";
import {useNavigate} from 'react-router-dom'
import {ShoppingCart} from '@mui/icons-material'

const Container = styled.div`
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("image/baby2.jpg")
    center;
  background-size: cover;
  backgrond-repeat: no-repeat;
  height: 100vh;
  display:flex;
`;

const Wrapper = styled.div`
margin:15vh 2% 0;
`;
const Button = styled.button`
width:12em;
height:8vh;
display: flex;
align-items:center;
justify-content:space-evenly;
color:#020266;
`;

const BoldText = styled.h3`
margin-bottom:1em;
color:#020266;
`;
const Text = styled.p`
margin-bottom:20vh;
color:#1e5c2c;
font-weight:600;
font-size:20px;
`;
function Thanks() {
const navigate = useNavigate()

  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <Container>
        <Wrapper>
          <BoldText>
            Thanks for Shopping With Us, Your delivery is on it's way!
          </BoldText>
          <Text>You've made a baby smile today</Text>
          <Button onClick={()=>navigate('/')}><ShoppingCart/>Continue Shopping</Button>
        </Wrapper>
      </Container>
    </>
  );
}

export default Thanks;

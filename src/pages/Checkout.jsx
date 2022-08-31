import React, { useState } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { resetQuantity } from "../redux/cartSlice";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("Image/baby1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  pading: 2%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  height: 70vh;
  ${mobile({ width: "90%" })};
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  height: 3em;
  text-indent: 10px;
  border-radius: 5px;
  border: 1px solid blue;
  outline: none;
  box-sizing: border-box;
`;

const Text = styled.h3`
  margin: 5vh 0 10vh 0;
  font-weight: bold;
  font-family: 'Hachi Maru Pop', cursive;
  font-size: 2rem;
  color:#fc2861;
`;

const Error = styled.p`
 color:red;
`;
const Form = styled.form`
  width: 80%;
  ${mobile({ width: "100%", padding: "2%" })}
`;
const Button = styled.button`
  width: 100%;
  height: 4em;
  background-color: blue;
  border: none;
  color: white;
  border-radius: 5px;
`;

function Checkout() {
  const [cardNo, setCardNo] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false)

  const total = useSelector(state => state.cart.total)

  const navigate = useNavigate();

  const dispatch = useDispatch()

  console.log(cardNo);

  const onChange = (e) => {
        if (e.target.value.length < 24) {
            setCardNo(e.target.value);
          }
  };

  const onChangeDate = (e) => {
    if (e.target.value.length === 2) {
      e.target.value = e.target.value + "/";
      setExpDate(e.target.value);
    } else if (e.target.value.length < 6) {
      setExpDate(e.target.value);
    }
  };

  const onChangeCvv = (e) => {
    if (e.target.value.length < 4) {
      setCvv(e.target.value);
    }
  };

  const onChangePin = (e) => {
    if (e.target.value.length < 5) {
      setPin(e.target.value);
    }
  };

  let cardNumber = cardNo.replace(/\s/g, "");
  let cardNum = "";

  for (let i = 0; i < cardNumber.length; i++) {
    if (i % 4 == 0 && i > 0) cardNum = cardNum.concat(" ");
    cardNum = cardNum.concat(cardNumber[i]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( cardNo === '' || expDate === '' || cvv === '' || pin === ''){
        setError(true)
    }else{
        navigate("/thank-you");
        dispatch(resetQuantity())
    }
  };
  return (
    <Container>
      <Wrapper>
        <Text><span style={{color:'blue'}}>baby</span>ME</Text>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                placeholder="Card Number"
                value={cardNum}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                value={expDate}
                placeholder="Exp. Date"
                onChange={onChangeDate}
              />
            </Grid>
            <Grid item xs={6}>
              <Input value={cvv} placeholder="CVV" type='number' onChange={onChangeCvv} />
            </Grid>
            <Grid item xs={12}>
              <Input value={pin} placeholder="PIN" type='number' onChange={onChangePin} />
            </Grid>
            {error && <Grid item xs={12}><Error>All fields are required to continue, please check and try again.</Error></Grid>}
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Pay &#8358;{total}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Checkout;

import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../Header/Announcement";
import Footer from "../Header/Footer";
import Navbar from "../Header/Navbar";
import Newsletter from "../Header/Newsletter";
import { mobile } from "../responsive";
import { useSelector , useDispatch} from "react-redux";
import { IconButton } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import { addQuantity, reduceQuantity } from "../redux/cartSlice";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR PRODUCTS</Title>
        <Top>
          <TopButton onClick={()=>navigate('/')}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Our products are tested and trusted, you and your baby will definitely love it.</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={()=>navigate('/checkout')}>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.length < 1 && <h1>You Currently Have No Products</h1>}
            {cart.products?.map((p)=>(
            <Product key={p.name}>
              <ProductDetail>
                <Image src={p.img}/>
                <Details>
                  <ProductName>
                    <b>Product:</b> {p.name}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {Math.trunc(Math.random() * 10000000000)}
                  </ProductId>
                  {p.color && <ProductColor color={p.color} />}
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <IconButton onClick={()=>dispatch(addQuantity())}>
                  <Add />
                  </IconButton>
                  <ProductAmount>{p.quantity}</ProductAmount>
                  <IconButton onClick={()=>dispatch(reduceQuantity())}>
                  <Remove />
                  </IconButton>
                </ProductAmountContainer>
                <ProductPrice>&#8358;{p.price * p.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            ))}
           
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>&#8358;{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>&#8358;1500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>&#8358;-1500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>&#8358;{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={()=>navigate('/checkout')}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter/>
      <Footer />
    </Container>
  );
};

export default Cart;
import {useState} from 'react'
import { IconButton } from '@mui/material';
import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components";
import Announcement from "../Header/Announcement";
import Footer from "../Header/Footer";
import {Header} from "../Header/Header";
import Newsletter from "../Header/Newsletter";
import { mobile } from "../responsive";
import { allProducts } from "../data";
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports';
import { addProducts } from '../redux/cartSlice';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 600;
  font-family:cursive;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;



const AddContainer = styled.div`
  margin-top:2em;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const {id} = useParams()
  const singleProduct = allProducts.find(p => p.name === id) 

  const handleQuantity = (order) =>{
    if (order === 'asc'){
      setQuantity(prev => prev + 1)
    }else if (order === 'desc' && quantity > 1){
      setQuantity(prev => prev - 1)
    }
  }

  const addToCart = () =>{
    dispatch(addProducts({...singleProduct, quantity}))
  }
  return (
    <Container>
      <Header />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={singleProduct.img} />
        </ImgContainer>
        <InfoContainer>
          <Title style={{color:singleProduct.color}}> {singleProduct.name}</Title>
          <Desc>
           {singleProduct.desc}
          </Desc>
          <Price>&#8358;{singleProduct.price}</Price>
          
          <AddContainer>
            <AmountContainer>
              <IconButton onClick={()=>handleQuantity("desc")}>
              <Remove />
              </IconButton>
              <Amount>{quantity}</Amount>
              <IconButton onClick={()=>handleQuantity("asc")}>
              <Add />
              </IconButton>
            </AmountContainer>
            <Button onClick={addToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
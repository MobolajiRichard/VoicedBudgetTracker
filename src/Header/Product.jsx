import {
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  background-color: #f5fbfd;
  line-height:0;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Price = styled.p`
font-weight:600;
`;
const Name = styled.p`

`;

const Product = ({ item }) => {
  const navigate = useNavigate()
  return (
    <Container>
        <LazyLoadImage src={item.img} height={'75%'} width={'75%'}/>
      <Info>
        <Icon onClick={()=>navigate(`/product/${item.name}`)}>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      {item.name && <Name>{item.name}</Name>}
      {item.price && <Price><span>&#8358;</span>{item.price}</Price>}
    </Container>
  );
};

export default Product;

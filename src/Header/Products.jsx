import styled from "styled-components";
import { popularProducts} from "../data";
import Product from "./Product";
import {useParams} from 'react-router-dom'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({product}) => {
  const {category} = useParams()
  const items = category ? product : popularProducts
  return (
    <Container>
      {items.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
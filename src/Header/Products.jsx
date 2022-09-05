import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ product }) => {
  const { category } = useParams();
  const items = category ? product : popularProducts;
  return (
    <Grid container spacing={2}>
      <Container>
        {items.map((item) => (
          <Grid item xs={12} sm={3} key={item.id}>
            <Product item={item} />
          </Grid>
        ))}
      </Container>
    </Grid>
  );
};

export default Products;

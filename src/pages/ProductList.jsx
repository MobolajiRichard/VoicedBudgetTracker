import styled from "styled-components";
import {Header} from "../Header/Header";
import Announcement from "../Header/Announcement";
import Products from "../Header/Products";
import Newsletter from "../Header/Newsletter";
import Footer from "../Header/Footer";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import {
  categoryClothes,
  categoryFoods,
  categoryDiaper,
  categoryToys,
} from "../data";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const { category } = useParams();
  const title = category.charAt(0).toUpperCase() + category.slice(1);

  let product;

  if (category === "foods") {
    product = categoryFoods;
  } else if (category === "clothes") {
    product = categoryClothes;
  } else if (category === "diapers") {
    product = categoryDiaper;
  } else {
    product = categoryToys;
  }
  return (
    <Container>
      <Header />
      <Announcement />
      <Title>{title}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products product={product} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;

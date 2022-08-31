import React from "react";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  aligm-items: center;
  padding: 0 1%;
  ${mobile({ height: "50px", padding: "10px 0px" })};
`;
const LeftNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display:'none' })}
`;
const Language = styled.p`
  ${mobile({ display: "none" })}
`;
const Search = styled.input`
  border: none;
  outline: none;
  text-indent: 5px;
  ${mobile({ width: "50px", marginLeft: 0 })}
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  margin-left: 1em;
`;
const MiddleNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  position:relative;
  
`;
const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: 'Hachi Maru Pop', cursive;
  font-size: 2rem;
  cursor: pointer;
  color:#fc2861;
  ${mobile({ fontSize: "20px", marginLeft: "5px" })}

`;
const RightNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Auth = styled.p`
  margin-left: 10px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

function Navbar() {
  const navigate = useNavigate();
  const quantity = useSelector(state => state.cart.quantity)
  console.log(quantity);
  return (
    <Container>
      <LeftNav>
        <Language>EN</Language>
        <SearchBox>
          <Search />
          <SearchOutlined sx={{ color: "gray" }} />
        </SearchBox>
      </LeftNav>
      <MiddleNav>
        <Logo onClick={() => navigate("/")}><span style={{color:'blue'}}>baby</span>ME</Logo>
      </MiddleNav>
      <RightNav>
        <Auth>
          <Link to="/register">Register</Link>
        </Auth>
        <Auth>
          <Link to="/login">Sign In</Link>
        </Auth>
        <Auth>
          <IconButton onClick={() => navigate("/cart")}>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Auth>
      </RightNav>
    </Container>
  );
}

export const Header = React.memo(Navbar);

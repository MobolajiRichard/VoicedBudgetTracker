import React from 'react'
import styled from 'styled-components'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    aligm-items:center;
    padding:0 1%;
    ${mobile({ height: "50px", padding: "10px 0px"  })}
`;
const LeftNav = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Language = styled.p`
${mobile({ display: "none" })}
`
const Search = styled.input`
    border:none;
    outline:none;
    text-indent:5px;
    ${mobile({ width: "50px", marginLeft:0 })}
`
const SearchBox = styled.div`
    display: flex;
    align-items:center;
    border: 1px solid lightgray;
    margin-left:1em;
`
const MiddleNav = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:600;
    font-size:2rem;
`
const Logo = styled.h1`
display:flex;
    align-items:center;
    justify-content:center;
  font-weight: bold;
  font-size:1.5rem;
  ${mobile({ fontSize: "20px", marginLeft:"5px"})}
`;
const RightNav = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const Auth = styled.p`
    margin-left:10px;
    ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`


function Navbar() {
  return (
    <Container>
        <LeftNav>
            <Language>EN</Language>
            <SearchBox>
                <Search/>
                <SearchOutlined sx={{color:'gray', }}/>
            </SearchBox>
        </LeftNav>
        <MiddleNav>
            <Logo>
                babyME
            </Logo>
        </MiddleNav>
        <RightNav>
            <Auth>Register</Auth>
            <Auth>Sign In</Auth>
            <Auth>
            <Badge badgeContent={3} color='primary'>
                <ShoppingCartOutlined />
            </Badge>
            </Auth>
        </RightNav>
    </Container>
  )
}

export default Navbar
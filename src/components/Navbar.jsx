import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
height:60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex:1;
align-items: center;
text-align: center;
`

const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;

`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
`

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;


`

const Input = styled.input`
border: none;
`




const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                  <Input/>
                  <Search style={{color:"gray", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
              <Logo>Spidey Scentz</Logo>
            </Center>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
                  <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon color="action" />
                  </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
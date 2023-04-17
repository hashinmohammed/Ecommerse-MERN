import React from "react";
import styled from "styled-components";
import {
  MdOutlineShoppingCart,
  MdSearch,
  MdFavoriteBorder,
} from "react-icons/md";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  border-radius: 64px;
 
  ;
`;
const Image = styled.img`
height: 90%;
z-index: 2;
border-radius: 25px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


`;
// const Circle = styled.div`
//     width: 300px;
//     height: 300px;
//     border-radius: 50%;
//     background-color: white;
//     position: absolute;
// `
const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background: rgba(0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
z-index: 3;
transition: all 0.5s ease;
border-radius: 64px;
&:hover{
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
transition: all 0.5s ease ;

&:hover{
    background-color: #e9f5f5;
    scale: 1.1;
}
`;

const Product = ({ item }) => {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.img} />
      <Info>
        <Icon>
          <MdOutlineShoppingCart />
        </Icon>
        <Icon>
          <MdSearch />
        </Icon>
        <Icon>
          <MdFavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

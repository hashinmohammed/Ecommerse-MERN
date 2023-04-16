import React from "react";
import styled from "styled-components";
import { MdSearch ,MdOutlineShoppingCart} from "react-icons/md";
import { Badge } from "@mui/material";

const NavBar = () => {
  // =========================================
  //                NAVBAR
  // =========================================
  const Container = styled.div`
    height: 60px;
    /* background-color: #000; */
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    /* color:white; */
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  // ======================================
  //          Left
  // ======================================
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Language = styled.span`
    cursor: pointer;
    font-size: 14px;
  `;
  // ***************************************
  //           search box
  // ***************************************

  const SearchContainer = styled.div`
    border: 0.5px solid grey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 24px;
  `;
  const Input = styled.input`
    border: none;
  `;
  //   ============================================
  //                   center
  // ===============================================

  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Logo = styled.h1`
    font-weight: bolder;
  `;
  //   ==============================================
  //                  right
  // =================================================
  const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
  `;
  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <MdSearch />
          </SearchContainer>
          {/* ==============================================
                               left
          
          ==================================================
          */}
        </Left>
        {/* ==============================================
                            center
        ==================================================*/}
        <Center>
          <Logo>HasH</Logo>
        </Center>
        {/* ===============================================
                              right
        ====================================================*/}
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
            <MdOutlineShoppingCart></MdOutlineShoppingCart>/
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

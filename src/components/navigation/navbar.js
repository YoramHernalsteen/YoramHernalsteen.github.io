import React from "react";
import styled from "@emotion/styled";
import {BurgerMenu} from "./burgerMenu";

const Nav = styled.div`
  width: 100%;
  height: 75px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed; /* Set the navbar to fixed position */
  top: 0;
  background: white;
  z-index: 6;
  .brand {
    padding: 15px 0; 
  }    
`;
const StyledBrand=styled.h2`
  padding-left: -0.5em;
  padding-right: 0.5em;
  background: linear-gradient(to top, lightgreen 50%, transparent 50%);
  @media (max-width: 900px) {
      font-size: 1.5em ;
      }
  @media (min-width: 900px) {
      font-size: 2em ;
      }
`;
export function NavBar(){
    return <>
        <Nav>
            <div className="brand">
                <StyledBrand>YORAM HERNALSTEEN</StyledBrand>
            </div>
            <BurgerMenu/>
        </Nav>
        </>
}
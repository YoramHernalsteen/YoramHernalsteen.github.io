import React from "react";
import styled from "@emotion/styled";
import {HashLink} from "react-router-hash-link"

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
     z-index: 7 ;
    li {
      color: #0D2538;
    }
  }
`;
export function RightNav(props){
    const {open, setOpen}=props;
    return <>
        <StyledUl open={open}>
            <li> <HashLink onClick={()=>setOpen(false)} to="#">About me</HashLink> </li>
            <li><HashLink onClick={()=>setOpen(false)} to="#portfolio">Portfolio</HashLink></li>
            <li>Resume</li>
            <li><HashLink onClick={()=>setOpen(false)} to="#">Contact</HashLink></li>
        </StyledUl>
        </>
}
import styled from "@emotion/styled";
import React from "react";
import {Link} from "react-router-dom";
import background from "../img/pexels-jonas-svidras-785418.jpg";

const Styled = styled.div`
   text-align: center;
   font-weight: bold;
   background: url(${background}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover; 
   background-size: cover;
   width: 100%;
   height: 100vh;
   overflow: auto;
   position: relative;
  
   
`;

const ColorOverlay = styled.div`
  position: absolute;
  width: 100%;
  height:100%;
  background-color: black;
  opacity: 0.7;
`;
const BackgroundH2 = styled.h2`
  color: white;
  z-index: 5;
  font-size: 2em;
`;
const BackgroundP = styled.p`
  color: white;
  z-index: 5;
  margin-bottom: 10em;
  font-size: 2em;
`;


 export function Background(){
    return <>
        <Styled>
            <ColorOverlay>
                <BackgroundH2>HI, I'M YORAM HERNALSTEEN</BackgroundH2>
                <BackgroundP>I love solving problems and creating software that adds value to life</BackgroundP>
                <ProjectsButton/>
            </ColorOverlay>

        </Styled>

        </>
}

const LinkStyled = styled(Link)`
  width: 15%;
  background-color: white;
  color: purple;
  padding: 1em 1em;
  margin: 1em;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 720px) {
        font-size: 0.75em;
      }
  @media (min-width: 720px){
        font-size: 1.25em;
  }
  &:hover{
    background-color: purple;
    color: white;
  }
  border-radius: 25px;
  
 
`;

function ProjectsButton(){
    return <>
            <LinkStyled to="/portfolio">Check out my portfolio</LinkStyled>
            <LinkStyled to="/resume">Check out my resume</LinkStyled>
        </>
}
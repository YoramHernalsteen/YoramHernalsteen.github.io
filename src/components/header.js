import styled from "@emotion/styled";
import React from "react";
import {HashLink} from "react-router-hash-link"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import background from "../img/pexels-jonas-svidras-785418.jpg";

const Styled = styled.div`
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
const BackgroundH3 = styled.h3`
  color: white;
  z-index: 5;
  font-size: 2em;
`;
const StyledSpan=styled.span`
   background-color: purple;
   color: white;
   border-radius: 25px;
   padding:0 0.25em;
`;
const BackgroundP = styled.p`
  color: white;
  z-index: 5;
  margin-bottom: 10em;
  font-size: 1.5em;
  font-weight: normal;
`;



 export function Background(){
    return <>
        <Styled>
            <ColorOverlay>
                <Container>
                    <BackgroundH2>HI, I'M YORAM HERNALSTEEN.</BackgroundH2>
                    <BackgroundH3>I'm a <StyledSpan>software developer.</StyledSpan></BackgroundH3>
                    <BackgroundP>I love solving problems and creating things that add value to life.</BackgroundP>
                    <ProjectsButton/>
                </Container>
            </ColorOverlay>
        </Styled>

        </>
}

const LinkStyled = styled(HashLink)`
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
            <LinkStyled to="#portfolio">Check out my portfolio</LinkStyled>
        </>
}
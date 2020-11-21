import styled from "@emotion/styled";
import React from "react";
import {Link} from "react-router-dom";
import background from "../img/pexels-jonas-svidras-785418.jpg";

const Styled = styled.div`
   text-align: center;
   font-weight: bold;
   font-size: 2em;
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
`;
const BackgroundP = styled.p`
  color: white;
  z-index: 5;
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

function ProjectsButton(){
    return <>
            <Link to="/portfolio">Check out my portfolio</Link>
            <Link to="/resume">Check out my resume</Link>
        </>
}
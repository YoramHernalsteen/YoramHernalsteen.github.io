import React from "react";
import styled from "@emotion/styled";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import bullSheetLogo from "../images/BullSheets_logo_op_donkere_achtergrond.png";
import desinoLogo from "../images/desino.png"


const RowSelectHeightI = styled(Row)`
    min-height: 500px;
    @media (max-width: 720px) {
        max-height: 1000px;
      }
  @media (min-width: 720px){
         max-height: 500px;
  }
`;
const RowSelectHeightII = styled(Row)`
    min-height: 500px;
    background-color: #171a1d;
    opacity: 0.7;
    color: whitesmoke;
    @media (max-width: 720px) {
        max-height: 1000px;
      }
  @media (min-width: 720px){
         max-height: 500px;
  }
`;
const ImageSelectHeight = styled(Image)`
    max-height: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;
const H1Styled = styled.h1`
    text-align: center;
`;

const LinkStyled = styled.a`
  width: 15%;
  background-color: white;
  color: purple;
  padding: 0.5em 0.5em;
  margin: 1em;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 720px) {
        font-size: 0.75em;
      }
  @media (min-width: 720px){
        font-size: 1em;
  }
  &:hover{
    background-color: purple;
    color: white;
  }
  border-radius: 25px;
`;


export function Portfolio() {
    return <>
        <H1Styled id="portfolio">PORTFOLIO</H1Styled>
        <p>// These are the projects I have worked on the past few years. Have a look around!</p>
        {/*Desino Stage*/}
        <RowSelectHeightI>
            <Col sm={12} md={6}>
                <h2 className="mt-5">TimeSheetApplication</h2>
                <h4>Project brief</h4>
                <p>This was an internship project.</p>
                <h4>Technologies</h4>
                <h4>Demo and Code</h4>
                <LinkStyled href="https://www.google.com/">Code</LinkStyled>
                <LinkStyled className="ml-5"href="www.github.com">Demo</LinkStyled>
            </Col>
            <Col sm={12} md={6} className="h-auto" >
                <ImageSelectHeight className="" src={desinoLogo} rounded fluid/>
            </Col>
        </RowSelectHeightI>
        <RowSelectHeightII>
            <Col sm={12} md={6}>
                <h2 className="mt-5">Project Bullsheet</h2>
                <h4>Project brief</h4>
                <p>Project bullsheet was made with some other students. The idea is to completely digitalize callsheets.
                    A
                    callsheet is an agenda in the media industry.</p>
                <h4>Technologies</h4>
                <h4>Demo and Code</h4>
            </Col>
            <Col sm={12} md={6} className="h-auto">
                <ImageSelectHeight className="" src={bullSheetLogo} rounded fluid/>
            </Col>
        </RowSelectHeightII>
        <RowSelectHeightI>
            <Col sm={12} md={6}>
                <h2 className="mt-5">FireNote</h2>
                <h4>Project brief</h4>
                <p>Project bullsheet was made with some other students. The idea is to completely digitalize callsheets.
                    A
                    callsheet is an agenda in the media industry.</p>
                <h4>Technologies</h4>
                <h4>Demo and Code</h4>
            </Col>
            <Col sm={12} md={6} className="h-auto">
                <ImageSelectHeight className="" src={bullSheetLogo} rounded fluid/>
            </Col>
        </RowSelectHeightI>
    </>
}
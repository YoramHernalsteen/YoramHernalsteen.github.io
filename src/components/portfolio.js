import React from "react";
import styled from "@emotion/styled";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {
    SiSpring,
    SiHtml5,
    SiJava,
    SiCss3,
    SiBootstrap,
    SiJavascript,
    SiHeroku,
    SiMysql,
    SiPhp,
    SiLaravel,
    SiSass,
    SiPostgresql,
    SiFirebase,
    SiReact,
    SiGithub

} from "react-icons/si";
import bullSheetLogo from "../images/BullSheets_logo_op_donkere_achtergrond.png";
import timeLogo from "../images/timeLogo-removebg-preview.png";
import fireLogo from "../images/kanban-firenote-removebg-preview.png";


const RowSelectHeightI = styled(Row)`
    min-height: 500px;
    @media (max-width: 768px) {
        max-height: 1500px;
      }
    @media (min-width: 768px){
      max-height: 1250px;
    }  
    @media (min-width: 1000px){
         max-height: 750px;
    }
`;

const RowSelectHeightILast = styled(Row)`
    min-height: 500px;
    @media (max-width: 768px) {
        max-height: 1500px;
      }
    @media (min-width: 768px){
      max-height: 1250px;
    }  
    @media (min-width: 1000px){
         max-height: 750px;
    }
    margin-bottom: 5em;
`;

const RowSelectHeightII = styled(Row)`
    min-height: 500px;
    background-color: #171a1d;
    opacity: 0.7;
    color: whitesmoke;
    @media (max-width: 768px) {
        max-height: 1500px;
      }
    @media (min-width: 768px){
      max-height: 1250px;
    }  
    @media (min-width: 1000px){
         max-height: 750px;
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

const Anchor = styled.a`
  display: block;
    position: relative;
    top: -75px;
    visibility: hidden;
`;
const IconLink = styled.a`
  text-decoration: none;
  color: inherit;
   &:hover{
   text-decoration: none;
   color: lightgreen;
   }
`;

export function Portfolio() {
    return <>
        <Anchor className="anchor" id="portfolio"/>
        <H1Styled>PORTFOLIO</H1Styled>
        <p>// These are the projects I have worked on the past few years. Have a look around!</p>
        {/*Desino Stage*/}
        <RowSelectHeightI>
            <Col sm={12} md={6}>
                <h2 className="mt-5">Project Management</h2>
                <h4>Project brief</h4>
                <p>This webapplication was built during an internship. What's important here is ease of use. How to do get as
                    much stuff done as possible with a simple button click. This application lets the administrator add new
                    clients, initiatives, projects and even recurring projects. Time and costs can then be added to each
                    project. However, normal users can only add time to projects they are assigned to. It is deployed on
                    Heroku, this means it can take a while for the server to spin up. </p>
                <p>Dummy accounts are (admin) Jan@gmail.com:Jan123456 and (user) Tom@gmail.com:Tom123456 </p>
                <h4>Technologies</h4>
                <div className="mb-3">
                    <IconLink href="https://www.php.net/" target="_blank"><SiPhp className="icons"/></IconLink>
                    <IconLink href="https://laravel.com/" target="_blank"><SiLaravel className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/JavaScript" target="_blank"><SiJavascript className="icons"/></IconLink>
                    <IconLink href="https://www.postgresql.org/" target="_blank"><SiPostgresql className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/Guide/HTML/HTML5" target="_blank"><SiHtml5 className="icons"/></IconLink>
                    <IconLink href="https://sass-lang.com/" target="_blank"><SiSass className="icons"/></IconLink>
                    <IconLink href="https://getbootstrap.com/" target="_blank"><SiBootstrap className="icons"/></IconLink>
                    <IconLink href="https://www.heroku.com/" target="_blank"><SiHeroku className="icons"/></IconLink>
                </div>
                <h4 className="mt-2">Demo and Code</h4>
                <div className="mb-2">
                    <LinkStyled className="ml-5" href="https://murmuring-hollows-22987.herokuapp.com/" target="_blank">Demo</LinkStyled>
                </div>

            </Col>
            <Col sm={12} md={6} className="h-auto">
                <ImageSelectHeight className="mt-5" src={timeLogo} rounded fluid/>
            </Col>
        </RowSelectHeightI>
        {/*BULLSHEET*/}
        <RowSelectHeightII>
            <Col sm={12} md={6}>
                <h2 className="mt-5">Project Bullsheet</h2>
                <h4>Project brief</h4>
                <p className="paragraph">Bullsheet is a webapplication that digitalizes the use of callsheets in the entertainment sector. It
                    manages callsheets more efficiently and offers the possibility to edit callsheets or use other
                    callsheets as a template to build on. It offers a built-in messaging service to quickly communicate
                    if needed. If a delay occurs, the callsheet gets automatically edited with the click of a button.
                    For more analysis, reports can be downloaded later (in excel). It is deployed on Heroku, this means
                    it can take a while for the server to spin up. </p>
                <p>Dummy accounts are: (admin): yoram:yoram and (user) gebruiker3:password</p>
                <h4>Technologies</h4>
                <div className="mb-3">
                    <IconLink href="https://www.java.com/nl/" target="_blank"><SiJava className="icons"/></IconLink>
                    <IconLink href="https://spring.io/" target="_blank"><SiSpring className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/JavaScript" target="_blank"><SiJavascript className="icons"/></IconLink>
                    <IconLink href="https://www.mysql.com/" target="_blank"><SiMysql className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/Guide/HTML/HTML5" target="_blank"><SiHtml5 className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><SiCss3 className="icons"/></IconLink>
                    <IconLink href="https://getbootstrap.com/" target="_blank"><SiBootstrap className="icons"/></IconLink>
                    <IconLink href="https://www.heroku.com/" target="_blank"><SiHeroku className="icons"/></IconLink>
                </div>
                <h4 className="mt-">Demo and Code</h4>
                <div className="mb-4">
                    <LinkStyled href="https://github.com/YoramHernalsteen/Bulllsheet" target="_blank">Code</LinkStyled>
                    <LinkStyled className="ml-5" href="https://project-bullsheet.herokuapp.com/" target="_blank">Demo</LinkStyled>
                </div>
            </Col>
            <Col sm={12} md={6} className="h-auto">
                <ImageSelectHeight className="mt-5" src={bullSheetLogo} rounded fluid/>
            </Col>
        </RowSelectHeightII>
        <RowSelectHeightILast>
            <Col sm={12} md={6}>
                <h2 className="mt-5">FireNote</h2>
                <h4>Project brief</h4>
                <p>FireNote was my first application built with a JavaScript Framework. It was used as a learning
                    device to learn React. Since I wanted to focus on the frontend, I used Cloud firestore as a (Nosql)
                    backend as a service.
                    It uses the authorization Firebase offers. FireNote is a note-taking/task-making application that tracks your
                    tasks and their status. It is deployed on gitpages. </p>
                <p>A dummy account is Jan@gmail.com:Jan123</p>
                <h4>Technologies</h4>
                <div className="mb-3">
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/JavaScript" target="_blank"><SiJavascript className="icons"/></IconLink>
                    <IconLink href="https://reactjs.org/" target="_blank"><SiReact className="icons"/></IconLink>
                    <IconLink href="https://firebase.google.com/" target="_blank"><SiFirebase className="icons"/></IconLink>
                    <IconLink href="https://github.com/" target="_blank"><SiGithub className="icons"/></IconLink>
                </div>
                <h4>Demo and Code</h4>
                <div className="mb-4">
                    <LinkStyled href="https://github.com/YoramHernalsteen/FireNote" target="_blank">Code</LinkStyled>
                    <LinkStyled className="ml-5" href="https://yoramhernalsteen.github.io/FireNote/#/" target="_blank">Demo</LinkStyled>
                </div>
            </Col>
            <Col sm={12} md={6} className="h-auto">
                <ImageSelectHeight className="mt-5" src={fireLogo} rounded fluid/>
            </Col>
        </RowSelectHeightILast>
    </>
}
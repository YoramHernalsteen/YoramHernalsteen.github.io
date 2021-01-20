import React, {useState} from "react";
import styled from "@emotion/styled";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal"
import Carousel from 'react-bootstrap/Carousel'
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
import studyplannerLogo from "../images/study-background-design_1300-184-removebg-preview.png"
//DESINO
import desino_api from "../images/desino/desino_api.png";
import desino_clients from "../images/desino/desino_clients.png";
import desino_cost_entry from "../images/desino/desino_cost_entry.png";
import desino_entries_ongoing from "../images/desino/desino_entries_ongoing.png";
import desino_initiatives from "../images/desino/desino_initiatives.png";
import desino_kpi_ongoing from "../images/desino/desino_kpi_ongoing.png";
import desino_kpi_recurring from "../images/desino/desino_kpi_recurring.png";
import desino_ongoing from "../images/desino/desino_ongoing.png";
import desino_recurring from "../images/desino/desino_recurring.png";
import desino_time_entry from "../images/desino/desino_time_entry.png";
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

/*const RowSelectHeightILast = styled(Row)`
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
`;*/

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
const RowSelectHeightIILast = styled(Row)`
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
    margin-bottom: 5em;
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
    text-decoration: none;
  }
  border-radius: 25px;
`;

const ButtonStyled = styled.button`
width: 15%;
  background-color: white;
  color: purple;
  padding: 0.5em 0.5em;
  margin: 1em;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  @media (max-width: 720px) {
        font-size: 0.75em;
      }
  @media (min-width: 720px){
        font-size: 1em;
  }
  &:hover{
    background-color: purple;
    color: white;
    border: none;
  }
  &:focus{
  outline: none;
  }
  border-radius: 25px;

`

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

const StyledCarouselInfo = styled(Carousel.Caption)`
 color: black;
`

export function Portfolio() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const comment = "//";

    return <>
        <Anchor className="anchor" id="portfolio"/>
        <H1Styled>PORTFOLIO</H1Styled>
        <p>{comment}These are some projects I have worked on the past few years. Have a look around!</p>
        {/*Desino Stage*/}
        <RowSelectHeightI>
            <Col sm={12} md={6}>
                <h2 className="mt-5">Project Management</h2>
                <h4>Project brief</h4>
                <p>This webapplication was built during an internship, as such only images as a demo are available. If you want a demo, feel free to send an email to get access. What's important here is ease of use. This application lets the administrator add
                    new
                    clients, initiatives, projects and even recurring projects. Time and costs can then be added to each
                    project. However, normal users can only add time to projects they are assigned to. The ultimate goal
                    of the application is to do an operational analysis of the projects and contracts (time value, time cost, budget, revenue,profit). It will calculate KPI's (key
                    performance indicators) to measure the well-being of these projects and contracts. An API was created to let other tools (Qliksense, ...) extract the data.  It is deployed on
                    Heroku, this means it can take a while for the server to spin up. </p>
                <h4>Technologies</h4>
                <div className="mb-3">
                    <IconLink href="https://www.php.net/" target="_blank"><SiPhp className="icons"/></IconLink>
                    <IconLink href="https://laravel.com/" target="_blank"><SiLaravel className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/JavaScript" target="_blank"><SiJavascript
                        className="icons"/></IconLink>
                    <IconLink href="https://www.postgresql.org/" target="_blank"><SiPostgresql
                        className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/Guide/HTML/HTML5" target="_blank"><SiHtml5
                        className="icons"/></IconLink>
                    <IconLink href="https://sass-lang.com/" target="_blank"><SiSass className="icons"/></IconLink>
                    <IconLink href="https://getbootstrap.com/" target="_blank"><SiBootstrap
                        className="icons"/></IconLink>
                    <IconLink href="https://www.heroku.com/" target="_blank"><SiHeroku className="icons"/></IconLink>
                </div>
                <h4 className="mt-2">Demo</h4>
                <div className="mb-2">
                    <ButtonStyled className="ml-5" onClick={handleShow}>Galery</ButtonStyled>
                </div>

            </Col>
            <Col sm={12} md={6} className="h-auto">
                <ImageSelectHeight className="mt-5" src={timeLogo} rounded fluid/>
            </Col>
        </RowSelectHeightI>
        <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Project Management</Modal.Title>
            </Modal.Header>
            <Modal.Body className="align-content-center">
                <Carousel>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_clients}
                            alt="Clients"
                        />

                        <StyledCarouselInfo>
                            <h3>All clients</h3>
                        </StyledCarouselInfo>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_initiatives}
                            alt="initiatives"
                        />
                        <StyledCarouselInfo>
                            <h3>Initiatives</h3>
                        </StyledCarouselInfo>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_ongoing}
                            alt="projects"
                        />
                        <StyledCarouselInfo>
                            <h3>Projects</h3>
                        </StyledCarouselInfo>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_kpi_ongoing}
                            alt="KPI ongoing"
                        />
                        <StyledCarouselInfo>
                            <h3>KPI's for projects</h3>
                        </StyledCarouselInfo>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_recurring}
                            alt="Contracts"
                        />
                        <StyledCarouselInfo>
                            <h3>Contracts</h3>
                        </StyledCarouselInfo>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_kpi_recurring}
                            alt="KPI recurring"
                        />
                        <StyledCarouselInfo>
                            <h3>KPI's for contracts</h3>
                        </StyledCarouselInfo>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_cost_entry}
                            alt="Cost entry"
                        />
                        <StyledCarouselInfo>
                            <h3>Cost entry</h3>
                        </StyledCarouselInfo>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_time_entry}
                            alt="Time entry"
                        />
                        <StyledCarouselInfo>
                            <h3>Time entry</h3>
                        </StyledCarouselInfo>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_entries_ongoing}
                            alt="Time entries for projects"
                        />
                        <StyledCarouselInfo>
                            <h3>Time entries for project</h3>
                        </StyledCarouselInfo>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block m-auto" fluid
                            src={desino_api}
                            alt="API"
                        />
                    </Carousel.Item>
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        {/*BULLSHEET*/}
        <RowSelectHeightII>
            <Col sm={12} md={6}>
                <h2 className="mt-5">Project Bullsheet</h2>
                <h4>Project brief</h4>
                <p className="paragraph">Bullsheet is a webapplication that digitalizes the use of callsheets in the
                    entertainment sector. It manages callsheets more efficiently and offers the possibility to edit
                    callsheets or use other
                    callsheets as a template to build on. It offers a built-in messaging service to quickly communicate
                    if needed. If a delay occurs, the callsheet gets automatically edited with the click of a button.
                    For more analysis, reports can be downloaded later (in excel). It is deployed on Heroku, this means
                    it can take a while for the server to spin up. </p>
                <p>Dummy accounts are: (admin): yoram:yoram and (user) gebruiker3:password</p>
                <h4>Technologies</h4>
                <div className="mb-3">
                    <IconLink href="https://www.java.com/nl/" target="_blank"><SiJava className="icons"/></IconLink>
                    <IconLink href="https://spring.io/" target="_blank"><SiSpring className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/JavaScript" target="_blank"><SiJavascript
                        className="icons"/></IconLink>
                    <IconLink href="https://www.mysql.com/" target="_blank"><SiMysql className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/Guide/HTML/HTML5" target="_blank"><SiHtml5
                        className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><SiCss3
                        className="icons"/></IconLink>
                    <IconLink href="https://getbootstrap.com/" target="_blank"><SiBootstrap
                        className="icons"/></IconLink>
                    <IconLink href="https://www.heroku.com/" target="_blank"><SiHeroku className="icons"/></IconLink>
                </div>
                <h4 className="mt-">Code and Demo</h4>
                <div className="mb-4">
                    <LinkStyled href="https://github.com/YoramHernalsteen/Bulllsheet" target="_blank">Code</LinkStyled>
                    <LinkStyled className="ml-5" href="https://project-bullsheet.herokuapp.com/"
                                target="_blank">Demo</LinkStyled>
                </div>
            </Col>
            <Col sm={12} md={6} className="h-auto">
                <ImageSelectHeight className="mt-5" src={bullSheetLogo} rounded fluid/>
            </Col>
        </RowSelectHeightII>
        <RowSelectHeightI>
            <Col sm={12} md={6}>
                <h2 className="mt-5">FireNote</h2>
                <h4>Project brief</h4>
                <p>FireNote was my first application built with a JavaScript Framework. It was used as a learning
                    device to learn React. Since I wanted to focus on the frontend, I used Cloud firestore as a (Nosql)
                    backend as a service.
                    It uses the authorization Firebase offers. FireNote is a note-taking/task-making application that
                    tracks your
                    tasks and their status. It is deployed on gitpages. </p>
                <p>A dummy account is Jan@gmail.com:Jan123</p>
                <h4>Technologies</h4>
                <div className="mb-3">
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/JavaScript" target="_blank"><SiJavascript
                        className="icons"/></IconLink>
                    <IconLink href="https://reactjs.org/" target="_blank"><SiReact className="icons"/></IconLink>
                    <IconLink href="https://firebase.google.com/" target="_blank"><SiFirebase
                        className="icons"/></IconLink>
                    <IconLink href="https://github.com/" target="_blank"><SiGithub className="icons"/></IconLink>
                </div>
                <h4>Code and Demo</h4>
                <div className="mb-4">
                    <LinkStyled href="https://github.com/YoramHernalsteen/FireNote" target="_blank">Code</LinkStyled>
                    <LinkStyled className="ml-5" href="https://yoramhernalsteen.github.io/FireNote/#/"
                                target="_blank">Demo</LinkStyled>
                </div>
            </Col>
            <Col sm={12} md={6} className="h-auto">
                <ImageSelectHeight className="mt-5" src={fireLogo} rounded fluid/>
            </Col>
        </RowSelectHeightI>
        <RowSelectHeightIILast>
            <Col sm={12} md={6}>
                <h2 className="mt-5">StudyPlanner</h2>
                <h4>Project brief</h4>
                <p>StudyPlanner is a personal project I wrote to more efficiently track my studies. StudyPlanner allows
                    users to add courses per semester and give these courses a difficulty rating.
                    This difficulty rating will then be used to track whether the users progress is going as wanted. Users can
                    add chapters per course and indicate whether they already started with the chapter and if it's already done.
                    Users can also give each course a different color as to personalize the application.It is deployed on
                    Heroku, this means
                    it can take a while for the server to spin up.</p>
                <p>A dummy account is Jan@gmail.com:Jan123456</p>
                <h4>Technologies</h4>
                <div className="mb-3">
                    <IconLink href="https://www.php.net/" target="_blank"><SiPhp className="icons"/></IconLink>
                    <IconLink href="https://laravel.com/" target="_blank"><SiLaravel className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/JavaScript" target="_blank"><SiJavascript
                        className="icons"/></IconLink>
                    <IconLink href="https://www.postgresql.org/" target="_blank"><SiPostgresql
                        className="icons"/></IconLink>
                    <IconLink href="https://developer.mozilla.org/nl/docs/Web/Guide/HTML/HTML5" target="_blank"><SiHtml5
                        className="icons"/></IconLink>
                    <IconLink href="https://sass-lang.com/" target="_blank"><SiSass className="icons"/></IconLink>
                    <IconLink href="https://getbootstrap.com/" target="_blank"><SiBootstrap
                        className="icons"/></IconLink>
                    <IconLink href="https://www.heroku.com/" target="_blank"><SiHeroku className="icons"/></IconLink>
                </div>
                <h4>Code and Demo</h4>
                <div className="mb-4">
                    <LinkStyled href="https://github.com/YoramHernalsteen/studyplanner"
                                target="_blank">Code</LinkStyled>
                    <LinkStyled className="ml-5" href="https://boiling-spire-97057.herokuapp.com/register"
                                target="_blank">Demo</LinkStyled>
                </div>
            </Col>
            <Col sm={12} md={6} className="h-auto">
                <ImageSelectHeight className="mt-5" src={studyplannerLogo} rounded fluid/>
            </Col>
        </RowSelectHeightIILast>
    </>
}
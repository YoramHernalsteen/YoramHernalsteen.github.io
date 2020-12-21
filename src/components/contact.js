import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const H1Styled = styled.h1`
    text-align: center;
    margin-bottom: 1em;
`;

const Anchor = styled.a`
  display: block;
    position: relative;
    top: -75px;
    visibility: hidden;
`;
const StyledDiv = styled(Row)`
    padding-top:2em ;
    background-color: #171a1d;
    opacity: 0.7;
    padding-bottom: 3em;
    color: white;
`;

export function Contact(){
    const[status, setStatus] =useState("");
    function submitForm(ev){
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }
    return <>
        <Anchor className="anchor" id="contact"/>
        <StyledDiv>
            <Col>
                <H1Styled>CONTACT</H1Styled>
                <p className="text-center">You have any questions? Here are a few ways to contact me!</p>
                <p className="text-center">
                    <SiGithub className="icons"/>
                    <SiGmail className="icons"/>
                    <SiLinkedin className="icons"/>
                </p>
                <p className="text-center">If those don't suit you, feel free to feel in the form!</p>
                <Form onSubmit={()=>submitForm(this)}
                      action="https://formspree.io/f/xleoogrv"
                      method="POST">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" />
                            <Form.Text className="text-muted">
                                Your email will never be shared!
                            </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Send me a message" name="message" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            {status === "SUCCESS" ? <p>Thanks!</p> :
                                <Button variant="dark" type="submit">
                                    Submit
                                </Button>}
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </Col>
                    </Form.Row>
                </Form>
            </Col>

        </StyledDiv>


        </>
}
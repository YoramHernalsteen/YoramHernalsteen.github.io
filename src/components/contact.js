import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";
import { SiGmail, SiGithub } from "react-icons/si";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_jxstNsmghTfnLE9RvG2D3");



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
    background-color: white;
    padding-bottom: 3em;
    color: black;
`;
const IconLink = styled.a`
  text-decoration: none;
  color: inherit;
   &:hover{
   text-decoration: none;
   color: lightgreen;
   }
`;

export function Contact(){
    const[status, setStatus] =useState("");
    function submitForm(ev){
        ev.preventDefault();
        const form = ev.target;
        emailjs.sendForm('service_vxzvc54', 'contact_form', form, 'user_jxstNsmghTfnLE9RvG2D3')
            .then((result) => {
               setStatus("SUCCESS");
            }, (error) => {
                setStatus("ERROR");
            });

    }
    function validate() {
        setStatus("NOPE");
    }
    return <>
        <Anchor className="anchor" id="contact"/>
        <StyledDiv>
            <Col>
                <H1Styled>CONTACT</H1Styled>
                <p className="text-center">You have any questions? Here are a few ways to contact me!</p>
                <p className="text-center">
                    <IconLink href="https://github.com/YoramHernalsteen" target="_blank" className="iconLink"><SiGithub className="icons"/></IconLink>
                    <IconLink href="mailto:yoram.hernalsteen@gmail.com" className="iconLink"><SiGmail className="icons"/></IconLink>
                    {/*<SiLinkedin className="icons"/>*/}
                </p>
                <p className="text-center">If those don't suit you, feel free to fill in the form!</p>
                <Form onSubmit={submitForm}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="user_email" required />
                            <Form.Text className="text-muted">
                                Your email will never be shared!
                            </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="user_name" required />
                        </Form.Group>
                    </Form.Row>
                    <input type="text" autoComplete="off" className="check" tabIndex="-1" name="user_adress" onChange={validate} />
                    <Form.Row>
                        <Form.Group as={Col} controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Send me a message" name="message" required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            {status === "SUCCESS" ? <p>Thanks, I'll be in touch shortly!</p> :
                             status === "NOPE"? null :
                                 <Button variant="dark" type="submit">
                                 Submit
                             </Button>
                            }
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </Col>
                    </Form.Row>
                </Form>
            </Col>

        </StyledDiv>


        </>
}
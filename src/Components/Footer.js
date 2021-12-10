import React from "react";
import {Col, Container, Navbar, NavbarBrand, Row} from "react-bootstrap";
import {alignPropType} from "react-bootstrap/types";
import styled from "styled-components";

const Styles = styled.div `
    a {
      text-decoration: none;
      color: #fff;
    }
  
    ul {
      list-style-type: none;
      column-width: 50em;
    }
`

export default function Footer() {
    return (
        <>

            <Styles>
            <Container fluid style={{backgroundColor: "#212529", color: "#fff"}}>
                <Container style={{display: "flex", justifyContent: "center", padding: "10px"}}>
                    <Row>
                        <Col>
                            <p>Probably here will be logo :)</p>
                        </Col>
                        <Col style={{marginRight: "10%"}}>
                            {/*<h5 className="title">Links</h5>*/}
                            <ul>
                                <li>
                                    <a href="/">Головна</a>
                                </li>
                                <li>
                                    <a href="/prices">Ціни</a>
                                </li>
                                <li>
                                    <a href="/appointment">Записатись на прийом</a>
                                </li>
                                <li>
                                    <a href="/reviews">Відгуки</a>
                                </li>
                                <li>
                                    <a href="/about">Про нас</a>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 style={{marginLeft: "8%"}}>Контакти</h5>
                            <ul>
                                <li>
                                    <a href="mailto:somemail@example.com">somemail@example.com</a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/search/">м. Івано-Франківськ, вул. Степана Бандери 1</a>
                                </li>
                                <li>
                                    <a href="tel:+38011111111">+380 111 111 11</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </Styles>
        </>
    )
}
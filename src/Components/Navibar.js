import React, { useState } from "react";
import {Button, Navbar, Nav, Container, Modal, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {MyAccount} from "../Pages/MyAccount";

export default function NaviBar() {

    const [logged, setLogged] = useState("");

    let isL = JSON.parse(localStorage.getItem("isLogged"));          // витягуємо з local storage запис чи залогінений користувач
    const [isLogged, setIsLogged] = useState(isL.stat);                  // використовуємо хук для умовного рендеру кнопок

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showL, setShowL] = useState(false);
    const handleCloseL = () => setShowL(false);
    const handleShowL = () => setShowL(true);

    const [data, setData] = useState({
        id: "",
        email: "",
        password: "",
    });

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")  || "[]"));

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }


    function submitReg(e) {
        let users1 = JSON.parse(localStorage.getItem("users"));
        data.id = users1.length;
        users1.push(data);
        localStorage.setItem("users", JSON.stringify(users1));
        setUsers(users1);
    }

    function submitLog(e) {
        let users = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < users.length; i++) {
            if(users[i].email == data.email && users[i].password == data.password) {
                setLogged(users[i].id);
                setIsLogged(true);                                                // міняємо стан хука і записуємо цей стан в local storage
                localStorage.setItem("isLogged", JSON.stringify({stat: true}));
                localStorage.setItem("idLogged", JSON.stringify(users[i].id));
            } else {
                //alert("Wrong email or password");
                handleCloseL();
            }
        }
    }

    function logout() {
        setIsLogged(false);
        localStorage.setItem("isLogged", JSON.stringify({stat: false}));
        document.location.href = "/";                                // щоб при логофі кидало на домашню сторінку
        if (!logged.statusL) {
            alert("Logoff");
        }
    }

    const RenderButtons = ({isLogged}) => {                                                                         // ф-ція для умовного рендеру кнопок
        if(isLogged) {
            return <> <Button variant="primary" className={"me-2"} href="/myAccount">Особистий кабінет</Button>
                <Button variant="primary" onClick={logout}>Вийти</Button> </>;
        } else {
            return <><Button variant="primary" className={"me-2"} onClick={handleShow}>Реєстрація</Button>
                <Button variant="primary" className={""} onClick={handleShowL}>Увійти</Button></>;
        }
    }

    const colorWhite = {color: "white"};

    return (
        <>

            <header>
                <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand style={{color: "#A9A9A9"}}>Полікарп Шевченко</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className={"me-auto"}>
                                <Nav.Link><Link style={colorWhite} to={"/"}>Головна</Link></Nav.Link>
                                <Nav.Link><Link style={colorWhite} to={"/appointment"}>Записатись на прийом</Link></Nav.Link>
                                <Nav.Link><Link style={colorWhite} to={"/reviews"}>Відгуки</Link></Nav.Link>
                                <Nav.Link><Link style={colorWhite} to={"/about"}>Про нас</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                {isLogged ? <RenderButtons isLogged={true} />: <RenderButtons isLogged={false} />}
                                { /* залежно від стану isLogged передаємо різні значення в ф-цію для рендеру                       (теоретично можна напряму тут викликати ф-цію і передати значення isLogged)*/ }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/*реєстрація*/}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Реєстрація</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                          <Form onSubmit={(e)=> submitReg(e)}>
                              <Form.Group controlId="fromBasicEmail">
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control onChange={(e) => handle(e)} id="email" value={data.email} type="email" placeholder="Введіть email"/>
                              </Form.Group>
                              <Form.Group controlId="fromBasicPassword">
                                  <Form.Label>Пароль</Form.Label>
                                  <Form.Control onChange={(e) => handle(e)} id="password" value={data.password} type="password" placeholder="Введіть пароль"/>
                              </Form.Group>
                              <Form.Group controlId="fromBasicButton">
                                  <Button style={{marginTop: "3%"}} variant="primary" type="submit">Зареєструватись</Button>
                              </Form.Group>
                          </Form>
                    </Modal.Body>
                </Modal>

                {/*вхід*/}
                <Modal show={showL} onHide={handleCloseL}>
                    <Modal.Header closeButton>
                        <Modal.Title>Увійти</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e)=> submitLog(e)}>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={(e) => handle(e)} id="email" value={data.email} type="email" placeholder="Введіть email"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicPassword">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control onChange={(e) => handle(e)} id="password" value={data.password} type="password" placeholder="Введіть пароль"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicButton">
                                <Button style={{marginTop: "3%"}} variant="primary" type="submit">Увійти</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </header>
        </>
    )
}

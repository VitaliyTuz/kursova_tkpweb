import React, {useState} from "react";
import styled from "styled-components";
import {Button, Form, Modal, Row} from "react-bootstrap";
import psy2 from "../psy2.png";
import * as PropTypes from "prop-types";
import Select from "react-select";


const Styles = styled.div `
  * {
  }
  
  p {
    font-size: 20px;
  }

  ul {
  }
  li {
    font-size: 23px;
    max-width: 90%;
    list-style-type: none;
  }
   h3 {
     margin-bottom: 1%;
   }
   
   h2 {
     margin-left: 20%;
     margin-bottom: 1%;
   }
  
`


const h6F = {borderLeft: "5px solid #A9A9A9", paddingLeft: "20px", marginBottom: "10%", marginLeft: "20%"};
const rowFormat = {border: "2px solid #A9A9A9", borderRadius: "15px", width: "260px", marginBottom: "1%", textAlign: "center"}

function DatePicker(props) {
    return null;
}

DatePicker.propTypes = {
    onChange: PropTypes.any,
    selected: PropTypes.any
};
export default function Appointment () {



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    let isLogged = JSON.parse(localStorage.getItem("isLogged"));


    let idL = JSON.parse(localStorage.getItem("idLogged"));          // витягуємо з local storage запис який користувач залогінений

    const handleShow = () => {
        if (isLogged.stat) {
            setShow(true);
        } else {
            alert("Log in first!");
        }
    }

    const [appArr, setAppArr] = useState(JSON.parse(localStorage.getItem("appointments")  || "[]"));           // список записів

    const [data, setData] = useState({
        id: appArr.length,
        idU: idL,
        date: new Date(),
        time: "9:00",
        price: 550,
    });



    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    function submitAppointment(e) {
        let appointments = JSON.parse(localStorage.getItem("appointments"));
        let isOccupied = false;
        for (let i = 0; i < appArr.length; i++) {
            if (appArr[i].date === data.date && appArr[i].time === data.time) {
                alert("Час зайнятий, виберіть, будь ласка інший час!");
                isOccupied = true;
                break;
            }
        }
        if (!isOccupied) {
            appointments.push(data);
            localStorage.setItem("appointments", JSON.stringify(appointments));
        }
    }

    function setDate(e) {
        data.date = e.target.value.toString();
    }

    function setTime(e) {
        data.time = e.target.value.toString();
    }

    function setPrice(e) {
        let count = e.target.value.toString();
        if (count === "1") {
            data.price = 550;
        } else if (count === "2") {
            data.price = 1050;
        } else if (count === "5") {
            data.price = 2500;
        }
    }


return  (
    <>
        <img src={psy2} width={"30%"} style={{minWidth : "430px", marginTop: "0px"}} align="right" vspace="0" hspace="0" alt=""/>
        <Styles>
            {/*<h1>Сторінка запису на прийом</h1>*/}
            <h2 style={{marginTop: "200px"}}>Наші послуги</h2>
            <br/>
            <h6 style={h6F}>Хочете спілкуватися з психологом по відео або по телефону, <br/>чи може тільки повідомленнями? Оберіть оптимальний варіант!</h6>
            <div style={{marginLeft: "39%"}}>
                <h3 style={{marginLeft: "7%"}}>Ціни</h3>
                <Row style={rowFormat}><p>1 сесія &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 550 грн <br/> Тривалість &ndash; 50  хвилин </p></Row>
                <Row style={rowFormat}><p>2 сесії &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1050 грн <br/> Тривалість &ndash; 100 хвилин </p></Row>
                <Row style={rowFormat}><p>5 сесій &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2500 грн <br/> Тривалість &ndash; 500 хвилин </p></Row>
                <Button variant={"secondary"} style={{margin: "0px 0px 1% 2%"}} onClick={handleShow}>Записатись на прийом</Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Записатись на прийом</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e)=> submitAppointment(e)}>
                        <Form.Group controlId="fromDate">
                            <Form.Label>Виберіть дату і час</Form.Label>
                            <Form.Control required="required" id="date" onChange={setDate} type="date" max="2022-01-01" min="2021-08-01" />
                            {/*<Select options={options} onChange={setTime} value={data.time} />*/}
                            <select required="required" style={{marginTop: "2%"}} onChange={setTime}>
                                <option value="9:00">9:00</option> {/*selected*/}
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                            </select>

                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Виберіть кількість прийомів: &nbsp;&nbsp;</Form.Label>
                            <select required="required" style={{marginTop: "2%"}} onChange={setPrice}>
                                <option value="1">1</option> {/*selected*/}
                                <option value="2">2</option>
                                <option value="5">5</option>
                            </select>
                        </Form.Group>
                        <Form.Group controlId="fromBasicButton">
                            <Button style={{marginTop: "3%"}} variant="primary" type="submit">Записатись</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </Styles>
    </>
)

}
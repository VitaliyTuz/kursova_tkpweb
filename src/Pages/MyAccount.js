import React, {useState} from "react";
import styled from "styled-components";
import {render} from "react-dom";
import {forEach} from "react-bootstrap/ElementChildren";
import {Button} from "react-bootstrap";
import Appointment from "./Appointment";
import liTrue from "../litrue-1.2.png";



const Styles = styled.div `  
  * {
    //margin-left: 100px;
  }
  
  img {
    width: 4%;
  }

  ul {
    //-webkit-column-count: 3;
    //-moz-column-count: 3;
    //column-count: auto;
    //column-width: 30em;
    padding-left: 5%;
    margin-left: 20%;
    //list-style-image: ""
  }
  li {
    font-size: 23px;
    max-width: 90%;
    list-style-type: none;
  }

  h2 {
    margin-left: 20%;
  }
  
  h3 {
     margin-left: 20%;
   }

  h4 {
    margin: 1% 0 1% 20%;
  }
 
`

function MyAccount() {
    let idL = JSON.parse(localStorage.getItem("idLogged"));
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")  || "[]"));

    const [userL, setUserL] = useState("");

    const [appArr, setAppArr] = useState(JSON.parse(localStorage.getItem("appointments")  || "[]"));

    const UserGreetings = () => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === idL) {
                setUserL(users[i].email);
                return userL.split("@")[0];                    // повертаємо e-mail без @example.com
            }
        }
    }

    let appointments = [];
    for (let i = 0; i < appArr.length; i++) {
        if (appArr[i].idU === idL) {
            appointments.push(appArr[i]);
        }
    }

    const appListFormat = { fontSize: "24px", display: "inline-block", padding: "0.5% 1%",   borderRadius: "15px", width: "60%", marginBottom: "1%", textAlign: "left"};


    const AppointmentsList = (props) => {
        if (props.card.length !== 0) {
            return (
                <>
                    <Styles>
                        <h3 style={appListFormat}><img src={liTrue} style={{paddingLeft: "1%"}}
                                                       alt=""/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{
                                display: "inline-block",
                                width: "20%",
                                maxWith: "20%"
                            }}> Час: {props.card.time} </span>
                            <span style={{
                                display: "inline-block",
                                width: "25%",
                                maxWith: "20%"
                            }}> Дата: {props.card.date} </span>
                            <span style={{
                                display: "inline-block",
                                width: "25%",
                                maxWith: "20%"
                            }}> До оплати: {props.card.price} грн. </span></h3>
                    </Styles>
                </>
            )
        }
    }


    const format = { minHeight: "calc(100vh - 308px)"};

    return (
        <>
            <body style={format}>
            <Styles>
                <h3 style={{marginTop: "5%"}}>Вітаю, <UserGreetings />.</h3>
                <h4>Ваші записи:</h4>
                {appointments.length !== 0 ?

                    Array.isArray(appointments) && appointments.map((item, index)=> {                                                   // реендер змінної кільксті елементів, типу як в циклі щось виводити
                    return (
                        <AppointmentsList key={index} card={item}                                                                               // якщо в списку appointments є якісь елементи, то рендеримо їх, якщо ні, то показуємл відпвідне повідомлення
                                           totalItems={appointments} />
                    );
                }
                )
                :   <>
                        <h3>У вас немає записів</h3>
                        <Button variant={"secondary"} style={{margin: "0px 0px 1% 20%"}} href={"/appointment"}>Записатись на прийом</Button>
                    </>
                }

                <h2 style={{marginTop: "1%"}}>Корисна інформація</h2>

                <h3 style={{margin: "1% 0 1% 25%"}}>Щоб відмінити запис на прийом, телефонуйте <a href="tel:+38011111111">+380 111 111 11</a>.</h3>

            </Styles>
            </body>
        </>
    )
}

export default MyAccount;


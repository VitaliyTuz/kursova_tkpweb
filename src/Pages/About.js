import React from "react";
import styled from "styled-components";
import img1 from '../about_page_img1.jpg';
import {Col, Row} from "react-bootstrap";
import about1 from '../about1.png';
import about2 from '../about2.png';
import about3 from '../about3.png';
import about4 from '../about4.png';
import about5 from '../about5.png';
import about6 from '../about6.png';
import liTrue from '../litrue-1.2.png';

const Styles = styled.div `
  * {
    //margin-left: 10%;
  }
  
  p {
    //margin: 5% 20% 8% 10%;
    font-size: 22px;
  }
  
  //img {
  //  width: 4%;
  //}

  ul {
    //-webkit-column-count: 3;
    //-moz-column-count: 3;
    //column-count: auto;
    //column-width: 30em;
    //padding-left: 9%;
    //list-style-image: ""
  }
  li {
    font-size: 23px;
    max-width: 90%;
    list-style-type: none;
  }
   h3 {
     //margin-left: 10%;
     margin-bottom: 2%;
     text-align: center;
   }
 
`
const imgFormat = {minWidth: "300px", margin: "-8% 5% 0% 20%", width: "27%", display: "inline-block"};
const imgFormat2 = {display: "block", marginLeft: "auto", marginRight: "auto"};
const textSize17 = {fontSize: "17px"};
const textCenter = {textAlign: "center"};

const ulFormat = {textAlign: "left", marginLeft: "25%", marginBottom: "2%", listStyleImage: 'url(' + liTrue + ')'};

export const About = () => (
    <>
        <Styles>
            <div>
                <p style={{margin: "5% 20% 8% 10%", fontSize: "22px"}}><img src={img1} style={imgFormat} align="left" vspace="0" hspace="0" alt="error"/>
                    Працюючи з нами, ви зможете отримати кваліфіковану допомогу психолога в будь-який час. Анонімні, безпечні та ефективні 50 хвилин спілкування з професіоналом! У вас також є можливість отримати консультацію онлайн, потрібен лише доступ до Інтернету.</p>
            </div>
            <div style={textCenter}>
                <h3>Коли потрібна допомога психолога?</h3>
                <p style={{fontSize: "22px", margin: "0px 15% 1% 15%"}}>Тривога, відчуття небезпеки, паніка, стрес потребують рішення. З психологом ви можете поговорити про наболіле і знайти рішення. Відповіді на хвилюючі запитання: </p>
                <Row>
                    <Col>
                        <ul style={ulFormat}>
                            <li>вирішити проблеми в сім'ї</li>
                            <li>налагодити взаємини з дітьми</li>
                            <li>зупинити емоційне вигорання</li>
                            <li>вирішити труднощі з колегами/керівником/підлеглими</li>
                            <li>виговоритися і опанувати психологію щастя</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div>
                <h3>Наші переваги</h3>
                <Row style={{marginLeft: "5%", marginBottom: "4%", textAlign: "center"}}>
                    <Col>
                        <p style={textSize17}><img src={about1} style={imgFormat2} alt="error"/><br/>повна анонімність і конфіденційність</p>
                    </Col>
                    <Col>
                        <p style={textSize17}><img src={about2} style={imgFormat2} alt="error"/><br/>відсутність фізичної зустрічі</p>
                    </Col>
                    <Col>
                        <p style={textSize17}><img src={about3} style={imgFormat2} alt="error"/><br/>вибір зручного часу (цілодобово)</p>
                    </Col>
                    <Col>
                        <p style={textSize17}><img src={about4} style={imgFormat2} alt="error"/><br/>доступна ціна</p>
                    </Col>
                    <Col>
                        <p style={textSize17}><img src={about5} style={imgFormat2} alt="error"/><br/>кваліфіковантй й досвідчений психолог</p>
                    </Col>
                    <Col>
                        <p style={textSize17}><img src={about6} style={imgFormat2} alt="error"/><br/>ефективні рішення</p>
                    </Col>
                </Row>
            </div>
        </Styles>
    </>
)
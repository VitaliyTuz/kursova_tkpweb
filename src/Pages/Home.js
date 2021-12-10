import React from "react";
import styled from "styled-components";
import psy1 from '../psy1-1.png';
import logo1 from '../logo1.png';
import logo2 from '../logo2.png';
import logo3 from '../logo3.png';
import logo4 from '../logo4.png';
import liTrue from '../litrue-1.2.png';
import liFalse from '../lifalse-1.png';


const Styles = styled.div `
  * {
    //margin-left: 100px;
  }
  
  img {
    width: 4%;
  }

  ul {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: auto;
    column-width: 30em;
    padding-left: 5%;
  }
  li {
    font-size: 23px;
    max-width: 90%;
    list-style-type: none;
  }
   h3 {
     margin-left: 10%;
   }
 
`

const h61 = {borderLeft: "5px solid #A9A9A9", paddingLeft: "20px", marginBottom: "20px"};
const imgFormat =  {minWidth: "40px", marginRight: "25px", width: "4%"};
const ulFormatT = {listStyleImage: 'url(' + liTrue + ')'};
const ulFormatF = {listStyleImage: 'url(' + liFalse + ')'};

export const Home = () => (
    // <Slider />
    // <Styles>
    <>

        <img src={psy1} width={"30%"} style={{minWidth : "430px", marginTop: "0px"}} align="right" vspace="0" hspace="0" alt=""/>
        <div style={{padding: "0px 10% 3% 10%"}}>
        <Styles>
                <div style={{marginLeft: "10%"}}>
                    <h1 style={{marginTop: "180px"}}>Покращення <br/> починаються з першої <br/> консультації</h1>
                    <br/>
                    <h6 style={h61}>Як тільки почнеш працювати з психологом, ти помітиш, наскільки <br/> зміниться твоє життя та відношення до нього.</h6>
                    <br/>
                    <h2 style={{margin: "2% 0px 2% 0px"}}>Наші переваги:</h2>
                    <p><img src={logo1} style={imgFormat} alt="error"/> Технічна підтримка 24/7</p>
                    <p><img src={logo2} style={imgFormat} alt="error"/> Зворотній зв'язок про роботу зі спеціалістом</p>
                    <p><img src={logo3} style={imgFormat} alt="error"/> Доступ до особистого кабінету</p>
                    <p><img src={logo4} style={imgFormat} alt="error"/> Можливість спілкуватись із психологом у будь-який час та будь-де</p>
                </div>
            <br/>


                <div /*style={{marginTop: "15%"}}*/>
                <h3>Проблеми, з якими працюють психологи:</h3>
                <ul style={ulFormatT}>
                    <li>Депресія</li>
                    <li>Агресія</li>
                    <li>Стрес</li>

                    <li>Розлучення</li>
                    <li>Самооцінка</li>
                    <li>Проблеми у стосунках</li>

                    <li>Втрата близької людини</li>
                    <li>Посттравматичний синдром</li>
                    <li>Образи, психосоматика тощо</li>

                    <li>Панічні атаки, підвищена тривожність</li>
                </ul>
                <h3>Проблеми, з якими не працюють психологи:</h3>
                <ul style={ulFormatF}>
                    <li>Залежність (алкогольна, наркотична, ігрова)</li>
                    <li>Психічні розлади</li>
                    <li>Не призначають медикаментозне лікування</li>
                </ul>
                </div>

            </Styles>
        </div>
    </>
)
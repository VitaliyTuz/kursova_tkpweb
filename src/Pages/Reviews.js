import React, {useState} from "react";
import MyAccount from "./MyAccount";
import {Button, Form} from "react-bootstrap";



function Reviews () {

    const format1 = {margin: "1% 20%", backgroundColor: "#f5f9fd", border: "1px solid #A9A9A9", borderRadius: "10px", padding: "0.4% 1%", textIndent: "20px", fontSize: "20px"};  // text-indent: 20px - відступ (абзац)

    let isL = JSON.parse(localStorage.getItem("isLogged"));

    let idL = JSON.parse(localStorage.getItem("idLogged"));

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")  || "[]"));

    const [userL, setUserL] = useState("");

    const [revArr, setRevArr] = useState(JSON.parse(localStorage.getItem("reviews")  || "[]"));

    const [data, setData] = useState({
        id: revArr.length,
        userName: "",
        review: "",
    });

    function submitReview (e) {
        let reviews = JSON.parse(localStorage.getItem("reviews"));
        data.id = reviews.length;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === idL) {
                data.userName = users[i].email.split("@")[0];                // записуємо в data.userName e-mail без @example.com
            }
        }
        //data.review = e.target.value;
        reviews.push(data);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        setRevArr(reviews);
    }

    function setReview (e) {
        data.review = e.target.value.toString();
        console.log(e.target.value);
    }


    const ReviewsList = (props) => {
        const f1 = {fontSize: "20px"};
        return (
            <>
                <div style={format1}>
                    <h3 style={f1}>Автор: {props.card.userName}</h3>
                    <h3 style={f1}>{props.card.review}</h3>
                </div>
            </>
        )
    }

    const format = { minHeight: "calc(100vh - 212px)"};

    return(
        <>
            <body style={format}>
            {revArr.length > 0 ?
                Array.isArray(revArr) && revArr.map((item, index)=> {                             // реендер змінної кільксті елементів, типу як в циклі щось виводити
                    return (
                        <ReviewsList key={index} card={item}
                                          totalItems={revArr} />
                    );
                }
                ) :
                <>
                    <h3 style={format1}>Відгуків ще немає</h3>
                </>
            }
            {
                isL.stat ?
                    <>
                        <Form style={{margin: "1% 20% "}} onSubmit={(e)=> submitReview(e)}>
                            <Form.Group  controlId="review">
                                <Form.Label style={{paddingLeft: "1%"}}>Введіть ваш відгук</Form.Label>
                                <Form.Control as="textarea" onChange={setReview} rows={3} />
                            </Form.Group>
                            <Button style={{margin: "1% 0"}} variant="primary" type="submit">
                                Залишити відгук
                            </Button>
                        </Form>
                    </>
                    :
                    <>
                        <h3 style={{margin: "0 20%", fontSize: "20px"}}>Увійдіть, щоб залишити відгук</h3>
                    </>

            }
            </body>
        </>

    )
}

export default Reviews;
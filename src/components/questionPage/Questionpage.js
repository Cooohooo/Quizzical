import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Questionbutton from "./Questionbutton";
import "./style.css";

const Questionpage = ({ quizes }) => {
    const [information, setInformation] = useState([]);
    const [useranswers, setUserAnswers] = useState([]);
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(true);

    const handleAnswer = (event, answer) => {
        event.target.classList.toggle("active");
        setUserAnswers((prev) => [...prev, answer]);
    };
    console.log("component rendered");
    // console.log("info: ", information);
    // console.log("correct answers: ", count);
    // console.log("flag: ", flag);

    const questionHandler = (quizes) => {
        quizes &&
            quizes.map((quiz) => {
                const check = {
                    ...quiz,
                    all_answers: [...quiz.incorrect_answers, quiz.correct_answer],
                };
                return setInformation((prev) => [...prev, check]);
            });
    };

    const handleCorrectAnswer = () => {
        let buttons = document.getElementsByClassName("quiz__item active");
        console.log(buttons);
        for (let i of buttons) {
            if (i.dataset.correct === "true") {
                i.classList.add("correct");
            } else {
                i.classList.add("wrong");
            }
        }
        useranswers.map((useranswer, index) => {
            if (information[index].correct_answer === useranswer) {
                setCount((prev) => (prev = prev + 1));
            }
        });
        setFlag(false);
    };

    const handleReplayGame = () => {
        window.location.reload()
    }

    useEffect(() => {
        quizes && questionHandler(quizes);
    }, [quizes]);

    const quiz =
        information &&
        information.map((quiz) => {
            return (
                <div className="quiz__wrapper">
                    <h2 className="title">{quiz.question}</h2>
                    <ul className="quiz__list">
                        <Questionbutton
                            handleAnswer={handleAnswer}
                            answers={quiz.all_answers}
                            correct={quiz.correct_answer}
                        />
                    </ul>
                </div>
            );
        });
    return (
        <>
            <div className="quiz">
                {quizes ? (
                    <>
                        {quiz}
                        <hr />
                        {flag ? (
                            <button className="btn quiz__btn" onClick={handleCorrectAnswer}>
                                Check answers
                            </button>
                        ) : (
                            <>
                                <p className="title title--check-answer">You scored {count}/5 correct answers</p>
                                <button className="btn quiz__btn" onClick={handleReplayGame}>Play again</button>
                            </>
                        )}
                    </>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                )}
            </div>
        </>
    );
};

export default Questionpage;

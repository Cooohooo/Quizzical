import React from "react";

const Question_button = ({ answers, handleAnswer, correct }) => {
    return answers.map((answer) => (
        <button
            className="quiz__item"
            onClick={(event) => handleAnswer(event, answer)}
            value={answer}
            data-correct={answer === correct ? "true" : "false"}
        >
            {answer}
        </button>
    ));
};

export default Question_button;

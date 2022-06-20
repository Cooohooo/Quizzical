import React from "react";

const Mainpage = ({ handleStartGame }) => {
    return (
        <>
            <h1 className="startpage__title">Quizzical</h1>
            <p className="startpage__paragraph">Some description if needed</p>
            <button className="btn startpage__btn" onClick={() => handleStartGame()}>
                Start quiz
            </button>
        </>
    );
};

export default Mainpage;

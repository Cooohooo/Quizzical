import { useState } from "react";
import "./App.css";
import Mainpage from "./components/mainPage/Mainpage.js";
import Questionpage from "./components/questionPage/Questionpage";

function App() {
    
    const [startquiz, setStartQuiz] = useState(false);
    const [quizes, setQuizes] = useState(null);

    const handleStartGame = () => {
        setStartQuiz((prev) => !prev);
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium")
            .then((res) => res.json())
            .then((data) => {
                setQuizes(data.results);
            });
    };
    
    return (
        <div className="startpage">
            <div className="startpage__imgright"></div>
            <div className="startpage__imgleft"></div>
            {startquiz ? <Questionpage quizes={quizes} /> : <Mainpage handleStartGame={handleStartGame} />}
        </div>
    );
}

export default App;

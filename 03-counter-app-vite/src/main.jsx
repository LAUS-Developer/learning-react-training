
import React from 'react';
import ReactDOM from 'react-dom/client';

// import {HelloWorldApp} from "./helloWorldApp";
import {FirstApp} from "./FirstApp"


// all in react starts with a function

function App (){
    return (<h1>Hola Mundo</h1>);
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
);



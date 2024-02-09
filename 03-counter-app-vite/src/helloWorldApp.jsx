/*
import React from 'react';
import ReactDOM from 'react-dom/client';

// all in react starts with a function

function App (){
    return (<h1>Hola Mundo</h1>);
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);


*/

/*
import React from 'react';
import {render} from 'react-dom';

// all in react starts with a function

const saludo = <h1>Hola Mundo</h1>;
const divRoot = document.querySelector("#root");

render(saludo,divRoot);

*/

export const HelloWorldApp = () => {
    return (
        <div> HelloWorldApp</div>
    )
}
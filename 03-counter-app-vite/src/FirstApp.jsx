import {fragment} from "react";

const newMessage = {
    message:"Hola Mundo",
    title:"test"
    
}; // No es recomendado pornerlo en el bloque export

const funcionLeo = /*no usar async*/() => { 

    return "Leonidas Funcionando :D";

}

export const FirstApp = () => {

    

    return (
        <>
            <h1>{ funcionLeo() }</h1>
            {/*<code>{ JSON.stringify(newMessage) }</code>*/}
            <p>Test</p>
        </>
        
    )
}
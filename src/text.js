import {useState} from "react";


function LessText({text, max = 55}){
    const [lessText, setText] = useState(true);
   
    if(text.length < max){
        return <span>{text}</span>
    }
    return ( 
        <span>
            debugger
            {lessText ? `${text.slice(0, max).trim()}...`: text }
            <a href="#" onClick={(evt) =>{
                evt.preventDefault();
                setText(!lessText);
            }}>{lessText ?  "more" : "less"}</a>
        </span>
    )
}

export default LessText;
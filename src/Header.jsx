import React, {useState} from "react";

function Header({name}){
    const styles = {
            fontFamily: "Outfit",
            fontStyle: "normal" ,
            fontSize: "700%",
            textShadow: "-4px -4px rgb(0, 0, 0)",
            color: "grey"
    } 

    return(
        <div id="user_name">
            <h1 style = {styles}>Hello<br></br>{name},</h1>
        </div>
    )
}

export default Header
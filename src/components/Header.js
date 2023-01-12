import React from "react";

function Header(props){
    return (
        <React.Fragment>
            <header>
                <h1>{props.name}</h1>
            </header>
        </React.Fragment>
    )
}

export default Header
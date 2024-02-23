import React from "react";

const Input = (props) => {
    return (
        <div>
            <input type="text" placeholder={props.username}/>
            <input type="password" placeholder={props.placeholder}/>
        </div>
    );
};

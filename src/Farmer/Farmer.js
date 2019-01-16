import React from 'react';


const farmer = (props) => {
    return (
        <div>
        <p onClick={props.click}>I'm {props.name} and I grow a total {Math.floor(Math.random()*10)} crops in a year. and my age {props.age}.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default farmer;
import React from 'react';

function RandomCard(props) {
    return(
        <div className="card w-25 btn m-2 d" onClick={()=>{props.handleClick(props.userName, props.name)}} >
            <img 
                src={props.url} 
                alt="profile-image" 
                className="img-fluid rounded-circle mx-auto" 
                style={{height: 60, width: 60}}>
            </img>
            <h4>{props.name}</h4>
            <h4>@{props.userName}</h4>

        </div>
    )
}

export default RandomCard;

import React from 'react';

function RandomCard(props) {
    return(
        <div className="card w-25 btn m-2 d" >
            {/* onClick = {(e) => {props.handleClick(props.username)}} 
                //this needs to go to the div for clicking need to change and pass the handleCLick method on Random page
                @ symbol in the variable will be a problem...need to remove it from the variable and hardcode it into the card
                iterate over the returned tweets to generate random with random number generator 
                use backend from the /api/user/search likely*/}
            <img 
                src={props.url} 
                alt="profile-image" 
                className="img-fluid rounded-circle mx-auto" 
                style={{height: 60, width: 60}}>
            </img>
            <h4>{props.name}</h4>
            <h4>{props.userName}</h4>

        </div>
    )
}


export default RandomCard;
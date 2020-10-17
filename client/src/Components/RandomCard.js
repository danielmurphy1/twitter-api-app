
import React from 'react';

function RandomCard() {
    return(
        <div className="card w-25 btn m-2 d">   
            <img 
                src={"https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_normal.jpg"} 
                alt="profile-image" 
                className="img-fluid rounded-circle mx-auto" 
                style={{height: 60, width: 60}}>
            </img>
            <h4>Playstation</h4>
            <h4>@Playstation</h4>

        </div>
    )
}


export default RandomCard;
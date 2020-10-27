import React from 'react';

function Home(){
    return(
        <div className="container text-center">
            <div className="container text-center text-box">
                <h1>Tweeter-Grabberer</h1>
                <p>This application allows the user to search tweets from the Twitter API.  </p>
                <br/>
                <p>The search page allows the user to search by Twitter user-name or by Twitter topics.</p>
                <br/>
                <p>The random page allows the user to fetch a random tweet some from of my favorite Twitter users.</p>
            </div>
            <img src={require("../images/bird.jpg")}/>
        </div>  
    )
}

export default Home;
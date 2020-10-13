import React from 'react';
import '../css/tweetcard.css'

class TweetCard extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <div>
                            <img src={require ("../images/test1.jpg")} alt="test"
                            className="img-fluid rounded-circle" style={{height: 100}}></img>
                            
                            <p>Dan Murphy @LupeSanchez</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="card-footer">
                    <div>
                        <p>Date Placeholder </p>
                        <p>Time Placeholder</p>
                        <div>
                            <img src={require("../images/heart-icon.png")} alt="heart" className="img-fluid number-ref" />
                            <p>0</p>
                            <img src={require("../images/retweet-icon.png")} alt="heart" className="img-fluid number-ref" />
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TweetCard;
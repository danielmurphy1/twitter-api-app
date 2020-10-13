import React from 'react';
import '../css/tweetcard.css'

class TweetCard extends React.Component {
    constructor(){
        super();
    }
    render(){
        for(let i = 0; i < this.props.user.length; i++){
            return(
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="card-title">
                            <div>
                                <img src={this.props.image} alt="test"
                                className="img-fluid rounded-circle" style={{height: 100}}></img>
                                
                                <p>{this.props.user}</p> 
                                <br/>
                                <p>@{this.props.screenName}</p>
                            </div>
                        </div>
                        <p>{this.props.tweetText}</p>
                    </div>
                    <div className="card-footer">
                        <div>
                            <p>Date Placeholder </p>
                            <p>Time Placeholder</p>
                            <div>
                                <img src={require("../images/heart-icon.png")} alt="heart" className="img-fluid number-ref" />
                                <p>{this.props.likesCount}</p>
                                <img src={require("../images/retweet-icon.png")} alt="heart" className="img-fluid number-ref" />
                                <p>{this.props.retweetCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


export default TweetCard;
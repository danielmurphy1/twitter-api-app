import React from "react";
import "../css/modal.css"
import TweetCard from './TweetCard';

class Modal extends React.Component{
    render(){
        if (!this.props.isModal){
            return null;
        }

        return (
            <div className="confirmation-modal">
            <div className="modal-content">
                <button className="close" onClick={this.props.closeModal}>
                    &times;
                </button>
                <div className="text-center">
                    <TweetCard 
                        image={this.props.image}
                        user={this.props.user}
                        screenName={this.props.screenName}
                        tweetText={this.props.tweetText}
                        date={this.props.date}
                        time={this.props.time}
                        likesCount={this.props.likesCount}
                        retweetCount={this.props.retweetCount}
                    />
                </div>
            </div>
        </div>
        )
    }
}

export default Modal;
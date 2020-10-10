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
                <button className="close" onClick={this.props.closeModal}> {/* Eventually add an onClick attribute here to close the modal */ }
                    &times;
                </button>
                <div className="text-center">
                    <TweetCard />
                </div>
            </div>
        </div>
        )
    }
}

export default Modal;
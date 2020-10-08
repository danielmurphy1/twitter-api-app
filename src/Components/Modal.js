import React from "react";
import "../modal.css"

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
                    <h1>Modal Works</h1>
                
                </div>
            </div>
        </div>
        )
    }
}

export default Modal;
import React from "react";
import "./modal.css"

class Modal extends React.Component{
    render(){
        if (!this.props.isModal){
            return null;
        }
        
        return (
            <div className="confirmation-modal">
                Modal Here
            </div>
        )
    }
}

export default Modal;
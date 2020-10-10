import { render } from '@testing-library/react';
import React from 'react';
import Modal from '../Components/Modal'

class Random extends React.Component{
    constructor(){
        super();
        this.state = {
            isModal: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleClick(){
        this.setState({
            isModal: true
        })
    }

    closeModal(){
        this.setState({
            isModal: false
        })
    }

    render(){
        return(
            <div className="container">
                <div className="container text-center text-box">
                    <h4>Choose One of My Favorite Users to Get One of Their Random Tweets</h4>
                </div>
                <div className="container">
                    Favorites Go here
                </div>
                <Modal isModal={this.state.isModal} closeModal={this.closeModal} />
                <button onClick={this.handleClick} className="btn btn-danger">Test</button>
            </div>
        )
    }
}

export default Random;
import { render } from '@testing-library/react';
import React from 'react';
import Modal from '../Components/Modal';
import RandomCard from '../Components/RandomCard';
import randomData from '../Components/RandomCardData';

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
        //create array of objects for 5 favorites
        //in the container div, map over the array to generate 5 cards dynamically
        console.log(randomData[0].userName)
        // const data =[];
        // for(let i =1; i <=5; i++){
        //     data.push(i);
        // }
        return(
            
            <div className="container">
                <div className="container text-center text-box">
                    <h4>Choose One of My Favorite Users to Get One of Their Random Tweets</h4>
                </div>
                <div className="container d-flex justify-content-between flex-wrap">
                    {randomData.map(random =>{
                        return <RandomCard
                            key={random.id}
                            name={random.name}
                            userName={random.userName}
                            url={random.url}
                            />
                    })}
                </div>
                <Modal isModal={this.state.isModal} closeModal={this.closeModal} />
                <button onClick={this.handleClick} className="btn btn-danger">Test</button>
            </div>
        )
    }
}

export default Random;
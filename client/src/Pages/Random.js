import React from 'react';
import Modal from '../Components/Modal';
import RandomCard from '../Components/RandomCard';
import randomData from '../Components/RandomCardData';

class Random extends React.Component{
    constructor(){
        super();
        this.state = {
            isModal: false,
            userName: "", 
            searchText: "",
            user: "", 
            screenName: "", 
            image: "",
            retweetCount: "", 
            likesCount: "", 
            date: "", 
            time: "", 
            tweetText: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    async handleClick(userName, name){
        this.setState({
            isModal: true, 
            userName: userName,
            user: name, 
            searchText: userName,
            screenName: userName,
        })
       
        const content = await fetch(`/api/user/search?searchText=${userName}`)
            .then(res => res.json());
        // console.log("card Clicked")
        // console.log(this.state.userName)
        // console.log(content.length);
        const tweetNumber = Math.floor(Math.random() * content.length);
        // console.log(tweetNumber);
        // console.log(content[tweetNumber]);
        // console.log(content[tweetNumber].user.profile_image_url_https);
        let createdAtArray = content[tweetNumber].created_at.split(" ");
        let date = createdAtArray.slice(1,3);
        date.push(createdAtArray[5]);
        let dateString = date.join(" ");
        let time = createdAtArray.slice(3,4);
        let timeString = time.join();
        this.setState({
            image: content[tweetNumber].user.profile_image_url_https,
            retweetCount: content[tweetNumber].retweet_count,
            likesCount: content[tweetNumber].favorite_count,
            date: dateString,
            time: timeString,
            tweetText: content[tweetNumber].full_text
        })
    
        console.log(this.state)
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
                <div className="container d-flex justify-content-between flex-wrap">
                    {randomData.map(random =>{
                        return <RandomCard
                            key={random.id}
                            name={random.name}
                            userName={random.userName}
                            url={random.url}
                            handleClick={this.handleClick}
                            />
                    })}
                </div>
                <Modal 
                    isModal={this.state.isModal} 
                    closeModal={this.closeModal} 
                    image={this.state.image}
                    user={this.state.user}
                    screenName={this.state.screenName}
                    tweetText={this.state.tweetText}
                    date={this.state.date}
                    time={this.state.time}
                    likesCount={this.state.likesCount}
                    retweetCount={this.state.retweetCount}
                    />
            </div>
        )
    }
}

export default Random;
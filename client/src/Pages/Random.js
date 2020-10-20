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
            tweetText: "", 
            media: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    async handleClick(userName, name){
        const content = await fetch(`/api/user/search?searchText=${userName}`)
            .then(res => res.json());
        const tweetNumber = Math.floor(Math.random() * content.length);
        let createdAtArray = content[tweetNumber].created_at.split(" ");
        let date = createdAtArray.slice(1,3);
        date.push(createdAtArray[5]);
        let dateString = date.join(" ");
        let time = createdAtArray.slice(3,4);
        let timeString = time.join();
        this.setState({
            isModal: true, 
            userName: userName,
            user: name, 
            searchText: userName,
            screenName: userName,
            image: content[tweetNumber].user.profile_image_url_https,
            retweetCount: content[tweetNumber].retweet_count,
            likesCount: content[tweetNumber].favorite_count,
            date: dateString,
            time: timeString,
            tweetText: content[tweetNumber].full_text,
            media: (content[tweetNumber].entities.media) ? content[tweetNumber].entities.media[0].media_url_https : null
        })
        // console.log(content[3].entities.media[0].media_url_https)
        if(content[tweetNumber].entities.media){
            console.log(content[tweetNumber].entities.media[0].media_url_https);
        } else{
            console.log("no media")
        }
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
                    media={this.state.media}
                    />
            </div>
        )
    }
}

export default Random;
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
        

        
        for (const tweetData of content) {
            
            //add hyperlinks for hashtags, urls, and user mentions   
            if(tweetData.entities.hashtags.length > 0){
                for(let hashtag of tweetData.entities.hashtags){
                    tweetData.full_text = tweetData.full_text.replace(`#${hashtag.text}`, `<a href="https://twitter.com/hashtag/${hashtag.text}?src=hashtag_click" target="_blank">#${hashtag.text}</a>`);
                }
            }
            if(tweetData.entities.urls.length > 0){
                for(let url of tweetData.entities.urls){
                    tweetData.full_text = tweetData.full_text.replace(`${url.url}`, `<a href="${url.url}" target="_blank">${url.display_url}</a>`);
                }
            }
            if(tweetData.entities.user_mentions.length > 0){
                for(let mentions of tweetData.entities.user_mentions)
                tweetData.full_text = tweetData.full_text.replace(`@${mentions.screen_name}`, `<a href="https://twitter.com/${mentions.screen_name}" target="_blank">@${mentions.screen_name}</a>`);
            }
             //check if last url in text refers to the tweet itself - if so, deletes that URL
            if(tweetData.full_text.includes("t.co")){
                tweetData.full_text = tweetData.full_text.split(" ");
                tweetData.full_text.pop();
                tweetData.full_text = tweetData.full_text.join(" ");
            }
        }

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
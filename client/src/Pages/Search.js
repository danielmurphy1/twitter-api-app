import React from 'react';
import TweetCard from '../Components/TweetCard';
import SearchForm from '../Components/SearchForm';


class Search extends React.Component{
    constructor(){
        super();
        this.state={
            user: [], 
            screenName: [], 
            image: [],
            retweetCount: [], 
            likesCount: [], 
            date: [], 
            time: [], 
            tweetText: [], 
            searchText: "",
            media: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleContentSearch = this.handleContentSearch.bind(this);
        this.handleUserSearch = this.handleUserSearch.bind(this);
        
    }

    async handleContentSearch(event){
        event.preventDefault();

        const usersArray =[];
        const screenNameArray =[];
        const profileImageArray =[];
        const tweetTextArray =[];
        const retweetCountArray=[];
        const likesCountArray=[];
        const timesArray = [];
        const datesArray = [];
        const mediaArray = [];
            
        const content = await fetch(`/api/tweet/search?searchText=${this.state.searchText}`)
            .then(res => res.json());

        for (const tweetData of content.statuses) {
            
            usersArray.push(tweetData.user.name);
            screenNameArray.push(tweetData.user.screen_name);
            profileImageArray.push(tweetData.user.profile_image_url_https);
            
            retweetCountArray.push(tweetData.retweet_count);
            likesCountArray.push(tweetData.favorite_count);
            let createdAtArray = tweetData.created_at.split(" ");
            let date = createdAtArray.slice(1,3);
            date.push(createdAtArray[5]);
            let dateString = date.join(" ");
            datesArray.push(dateString);
            let time = createdAtArray.slice(3,4);
            let timeString = time.join();
            timesArray.push(timeString);
            tweetData.entities.media ? mediaArray.push(tweetData.entities.media[0].media_url_https) : mediaArray.push(null);

            this.setState({
                user: usersArray, 
                screenName: screenNameArray,
                image: profileImageArray,
                tweetText: tweetTextArray,
                retweetCount: retweetCountArray, 
                likesCount: likesCountArray,
                date: datesArray,
                time: timesArray,
                media: mediaArray
            })
            //add hyperlinks for hashtags, urls, and user mentions
            if(tweetData.entities.hashtags.length > 0){
                for(let hashtag of tweetData.entities.hashtags){
                    tweetData.full_text = tweetData.full_text.replace(`#${hashtag.text}`, `<a href='https://twitter.com/hashtag/${hashtag.text}?src=hashtag_click' target="_blank">#${hashtag.text}</a>`);
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
            tweetTextArray.push(tweetData.full_text);
            
        }
        this.setState({
            searchText: ""
        })
    }

    async handleUserSearch(event){
        event.preventDefault();

        const usersArray =[];
        const screenNameArray =[];
        const profileImageArray =[];
        const tweetTextArray =[];
        const retweetCountArray=[];
        const likesCountArray=[];
        const timesArray = [];
        const datesArray = [];
        const mediaArray = [];
            
        const content = await fetch(`/api/user/search?searchText=${this.state.searchText}`)
            .then(res => res.json());

        for (const tweetData of content) {
            
            usersArray.push(tweetData.user.name);
            screenNameArray.push(tweetData.user.screen_name);
            profileImageArray.push(tweetData.user.profile_image_url_https);
            retweetCountArray.push(tweetData.retweet_count);
            likesCountArray.push(tweetData.favorite_count);
            let createdAtArray = tweetData.created_at.split(" ");
            let date = createdAtArray.slice(1,3);
            date.push(createdAtArray[5]);
            let dateString = date.join(" ");
            datesArray.push(dateString);
            let time = createdAtArray.slice(3,4);
            let timeString = time.join();
            timesArray.push(timeString);
            tweetData.entities.media ? mediaArray.push(tweetData.entities.media[0].media_url_https) : mediaArray.push(null);

            this.setState({
                user: usersArray, 
                screenName: screenNameArray,
                image: profileImageArray,
                tweetText: tweetTextArray,
                retweetCount: retweetCountArray, 
                likesCount: likesCountArray,
                date: datesArray,
                time: timesArray,
                media: mediaArray
            })
            
            //add hyperlinks for hashtags, urls, and user mentions
            if(tweetData.entities.hashtags.length > 0){
                for(let hashtag of tweetData.entities.hashtags){
                    tweetData.full_text = tweetData.full_text.replace(`#${hashtag.text}`, `<a href='https://twitter.com/hashtag/${hashtag.text}?src=hashtag_click' target="_blank">#${hashtag.text}</a>`);
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
            tweetTextArray.push(tweetData.full_text);
            
        }
        this.setState({
            searchText: ""
        })
        
    }
    
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    };

    render(){
        let cards = []
        for(let i =0; i < this.state.user.length; i++){
            cards.push(i)
            }
        return(
            <div className="container col-6">
                <div className="container text-center text-box mb-3">
                    <h3>Search Tweets by User or Content</h3>
                    <br/>
                    <p>Note - Private Accounts Cannot Be Searched</p>
                </div>
                <SearchForm 
                    searchText={this.state.searchText} 
                    handleChange={this.handleChange} 
                    handleContentSearch={this.handleContentSearch}
                    handleUserSearch={this.handleUserSearch} 
                    />
                <div className="container mt-3">
                    
                    {cards.map(i => {
                        return <TweetCard 
                            key={i} 
                            user={this.state.user[i]} 
                            screenName={this.state.screenName[i]} 
                            image={this.state.image[i]} 
                            tweetText={this.state.tweetText[i]}
                            retweetCount={this.state.retweetCount[i]}
                            likesCount={this.state.likesCount[i]}
                            date={this.state.date[i]}
                            time={this.state.time[i]}
                            media={this.state.media[i]}
                            />
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Search;
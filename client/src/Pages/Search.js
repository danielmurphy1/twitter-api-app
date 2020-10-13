import { render } from '@testing-library/react';
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
            date: "", 
            time: "", 
            tweetText: [], 
            searchText: ""
        }
        this.handleChange = this.handleChange.bind(this);
        
    }

    async componentDidMount(){
        const usersArray =[];
        const screenNameArray =[];
        const profileImageArray =[];
        const tweetTextArray =[];
        const retweetCountArray=[];
        const likesCountArray=[];
        const content = await fetch("/api/tweet/search")
            .then(res => res.json());
        console.log(content.statuses[0].favorite_count);
        
        for (const tweetData of content.statuses) {
            
            usersArray.push(tweetData.user.name);
            screenNameArray.push(tweetData.user.screen_name);
            profileImageArray.push(tweetData.user.profile_image_url_https);
            tweetTextArray.push(tweetData.text);
            retweetCountArray.push(tweetData.retweet_count);
            likesCountArray.push(tweetData.favorite_count);
            this.setState({
                user: usersArray, 
                screenName: screenNameArray,
                image: profileImageArray,
                tweetText: tweetTextArray,
                retweetCount: retweetCountArray, 
                likesCount: likesCountArray
            })
            
        }

        const user = await fetch("/api/user/search")
            .then(res => res.json());
        console.log(user);
        
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
                <div className="container text-center text-box">
                    <h3>Search Tweets by User or Content</h3>
                </div>
                <SearchForm searchText={this.state.searchText} handleChange={this.handleChange} />
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
                            />
                    })}
                    
                </div>
            </div>
        )
    }
}



export default Search;
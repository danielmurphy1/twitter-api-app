import { render } from '@testing-library/react';
import React from 'react';
import TweetCard from '../Components/TweetCard';
import SearchForm from '../Components/SearchForm';
import Axios from 'axios';

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
            searchText: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleContentSearch = this.handleContentSearch.bind(this);
        
    }

    // async componentDidMount(){
    //     const usersArray =[];
    //     const screenNameArray =[];
    //     const profileImageArray =[];
    //     const tweetTextArray =[];
    //     const retweetCountArray=[];
    //     const likesCountArray=[];
    //     const timesArray = [];
    //     const datesArray = [];
    //     const content = await fetch("/api/tweet/search")
    //         .then(res => res.json());


    //     //for testing    
    //     console.log(content.statuses[0].created_at);
        
        
    //     for (const tweetData of content.statuses) {
            
    //         usersArray.push(tweetData.user.name);
    //         screenNameArray.push(tweetData.user.screen_name);
    //         profileImageArray.push(tweetData.user.profile_image_url_https);
    //         tweetTextArray.push(tweetData.text);
    //         retweetCountArray.push(tweetData.retweet_count);
    //         likesCountArray.push(tweetData.favorite_count);
    //         let createdAtArray = tweetData.created_at.split(" ");
    //         let date = createdAtArray.slice(1,3);
    //         date.push(createdAtArray[5]);
    //         let dateString = date.join(" ");
    //         datesArray.push(dateString);
    //         let time = createdAtArray.slice(3,4);
    //         let timeString = time.join();
    //         timesArray.push(timeString);

    //         this.setState({
    //             user: usersArray, 
    //             screenName: screenNameArray,
    //             image: profileImageArray,
    //             tweetText: tweetTextArray,
    //             retweetCount: retweetCountArray, 
    //             likesCount: likesCountArray,
    //             date: datesArray,
    //             time: timesArray
    //         })
            
            
    //     }
    //     console.log(this.state)
    //     const user = await fetch("/api/user/search")
    //         .then(res => res.json());
    //     console.log(user);
        
    // }

    async handleContentSearch(event){
        event.preventDefault();

        const searchObject ={
            searchText: this.state.searchText
        }
        Axios.post("/api/tweet/search", searchObject)
        //console.log(searchObject)
            .then((res) =>{
                console.log(res.data)
            })
            const usersArray =[];
            const screenNameArray =[];
            const profileImageArray =[];
            const tweetTextArray =[];
            const retweetCountArray=[];
            const likesCountArray=[];
            const timesArray = [];
            const datesArray = [];
            const content = await fetch("/api/tweet/search")
                .then(res => res.json());
    
    
            //for testing    
            console.log(content.statuses[0].created_at);
            
            
            for (const tweetData of content.statuses) {
                
                usersArray.push(tweetData.user.name);
                screenNameArray.push(tweetData.user.screen_name);
                profileImageArray.push(tweetData.user.profile_image_url_https);
                tweetTextArray.push(tweetData.text);
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
    
                this.setState({
                    user: usersArray, 
                    screenName: screenNameArray,
                    image: profileImageArray,
                    tweetText: tweetTextArray,
                    retweetCount: retweetCountArray, 
                    likesCount: likesCountArray,
                    date: datesArray,
                    time: timesArray
                })
                
                
            }
        
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
                <SearchForm searchText={this.state.searchText} handleChange={this.handleChange} handleContentSearch={this.handleContentSearch} />
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
                            />
                    })}
                    
                </div>
            </div>
        )
    }
}



export default Search;
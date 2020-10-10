import { render } from '@testing-library/react';
import React from 'react';
import TweetCard from '../Components/TweetCard'

class Search extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container col-6">
                <div className="container text-center text-box">
                    <h3>Search Tweets by User or Content</h3>
                </div>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search User or Content"></input>
                        <button className="btn btn-dark">Search User</button>
                        <button className="btn btn-dark">Search Content</button>
                    </div>
                </form>
                <div className="container mt-3">
                    <TweetCard />
                </div>
            </div>
        )
    }
}



export default Search;
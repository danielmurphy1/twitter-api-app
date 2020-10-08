import { render } from '@testing-library/react';
import React from 'react';

function Search(){
    return(
        <div className="container">
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
            <div className="container">
                <p>Tweet Cards Here</p>
            </div>
        </div>
    )
}



export default Search;
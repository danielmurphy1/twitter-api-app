import { render } from '@testing-library/react';
import React from 'react';

function Home(){
    return(
        <div className="container text-center text-box">
            <h1>tweeter-grabberer</h1>
            <p>This application allows the user to search tweets from the twitter API.  </p>
            <br/>
            <p>The search page allows the user to search by twitter user or by twitter topics.</p>
            <br/>
            <p>The random page allows the user to fetch a random tweet some from of my favorite twitter users.</p>
        </div>
   
    )
}

export default Home;
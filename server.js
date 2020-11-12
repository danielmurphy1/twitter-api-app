const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const axios = require("axios");
require("dotenv").config();

app.use("/", express.static(path.join(__dirname, "client/build")));
app.use("/search", express.static(path.join(__dirname, "client/build")));
app.use("/random", express.static(path.join(__dirname, "client/build")));

const getToken = async () => {
    return await axios.post("https://api.twitter.com/oauth2/token", 'grant_type=client_credentials', 
    {
        auth: {
            username: process.env.TWITTER_API_KEY, 
            password: process.env.TWITTER_SECRET_KEY
        }, 
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", 
            Accept: "application/json"
        },
        responseType: "application/json",
    })
    .then(response => {
        return response.data;
    })
    .catch(err => {
        console.log(err.response);
    });
}

let tokenKey;
let token = getToken();
token.then(result => {
    tokenKey = result.access_token;
    console.log(tokenKey);
    })
    .catch(err => {
    console.log(err);
});

app.get("/api/tweet/search", (req, res) =>{
    const searchText = req.query.searchText;
    axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=${searchText}&result_type=popular&tweet_mode=extended`, {
        headers:{
            "Content-type": "application/json", 
            "Accept": "application/json", 
            "Authorization": "Bearer" + " " + tokenKey 
        }
    })
        .then((response) => {
            res.send(response.data);
        })
});

app.get("/api/user/search", (req, res) =>{
    const searchText = req.query.searchText;
    axios.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${searchText}&count=10&tweet_mode=extended`, {
        headers:{
            "Content-type": "application/json", 
            "Accept": "application/json", 
            "Authorization": "Bearer" + " " + tokenKey
        }
    })
        .then((response) => {
            res.send(response.data);
        })
});
 
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})


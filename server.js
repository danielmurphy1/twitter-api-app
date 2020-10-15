const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const axios = require("axios");

app.use("/", express.static(path.join(__dirname, "client/build")));
app.use("/search", express.static(path.join(__dirname, "client/build")));
app.use("/random", express.static(path.join(__dirname, "client/build")));

app.get("/api/tweet/search", (req, res) =>{
    console.log("tweetsearch")
    const searchText = req.query.searchText;
    //res.send("Hello");
    console.log(searchText)
    axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=${searchText}&result_type=popular&tweet_mode=extended`, {
        headers:{
            "Content-type": "application/json", 
            "Accept": "application/json", 
            "Authorization": "Bearer" + " " + "AAAAAAAAAAAAAAAAAAAAADQoIgEAAAAAy6zzchbqvwvhN2rAv8OjfwBMxeY%3DTjVDGcXCkrGtUXCvFDQZRVmgq5Tg2ZScnPQ1Zx3kY6Opwk6Q7i"
        }
    })
        .then((response) => {
            res.send(response.data);
            //console.log(response.data)
        })
});

app.get("/api/user/search", (req, res) =>{
    console.log("usersearch")
    const searchText = req.query.searchText;
    //res.send("Hello");
    axios.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${searchText}&count=5&tweet_mode=extended`, {
        headers:{
            "Content-type": "application/json", 
            "Accept": "application/json", 
            "Authorization": "Bearer" + " " + "AAAAAAAAAAAAAAAAAAAAADQoIgEAAAAAy6zzchbqvwvhN2rAv8OjfwBMxeY%3DTjVDGcXCkrGtUXCvFDQZRVmgq5Tg2ZScnPQ1Zx3kY6Opwk6Q7i"
        }
    })
        .then((response) => {
            res.send(response.data);
        })
});
 
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})


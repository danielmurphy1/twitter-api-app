const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const axios = require("axios");

app.use("/", express.static(path.join(__dirname, "client/build")));
app.use("/search", express.static(path.join(__dirname, "client/build")));
app.use("/random", express.static(path.join(__dirname, "client/build")));

app.get("/api/tweetsearch", (req, res) =>{
    console.log("tweetsearch")
    //res.send("Hello");
    axios.get("https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular", {
        headers:{
            "Content-type": "application/json", 
            "Accept": "application/json", 
            "Authorization": "Bearer" + " " + "AAAAAAAAAAAAAAAAAAAAADQoIgEAAAAAy6zzchbqvwvhN2rAv8OjfwBMxeY%3DTjVDGcXCkrGtUXCvFDQZRVmgq5Tg2ZScnPQ1Zx3kY6Opwk6Q7i"
        }
    })
        .then((response) => {
            res.send(response.data);
            console.log(response.data)
        })
});

app.get("/api/usersearch", (req, res) =>{
    console.log("usersearch")
    //res.send("Hello");
    axios.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=santaclaus&count=5", {
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

// app.get("/", (req, res) => {
//     res.send("Working")
// })

// async function getTwitterContent(){
//     const response = await fetch("https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular")
//     .then(res => res.json());
//     console.log(response);
// }
// getTwitterContent();

// async function getTwitterContent(){
//     const response = await fetch("https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular")
//     const data = await response.json()
//     console.log(data);
// }
// getTwitterContent();

// app.get("https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular", (req, res)=>{
    
// })


// const url = "https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular";
// const bearer = 'Bearer ' + 
// "AAAAAAAAAAAAAAAAAAAAADQoIgEAAAAAy6zzchbqvwvhN2rAv8OjfwBMxeY%3DTjVDGcXCkrGtUXCvFDQZRVmgq5Tg2ZScnPQ1Zx3kY6Opwk6Q7i";
// fetch(url, {
//         method: 'GET',
//         withCredentials: true,
//         credentials: 'include',
//         headers: {
//             'Authorization': bearer,
//             'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
//             'Content-Type': 'application/json'
//         }
//     }).then(responseJson => {
//         let items = JSON.parse(responseJson._bodyInit);
//         console.log(items);
//     })
//     .catch(error => this.setState({
//         isLoading: false,
//         message: 'Something bad happened ' + error
//     }));
    
    
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})


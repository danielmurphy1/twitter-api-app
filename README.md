# Tweeter-Grabberer - Twitter API Application

_Web Based Twitter API Search App using React.js, Node.js, Express.js, and Bootstrap_

## Instructions

To Download and Run Locally
___
1. Clone Code Locally from GitHub
2. Run "npm i" in terminal to install packages and dependencies
3. Run "npm run dev" in terminal to start application locally. 

To Use Locally or Accessing at Below Link
___
The search page can be used to search for tweets by either content or by username, using the corresponding button to search. When searching by username, input a valid Twitter username (omitting the "@" symbol), and Tweeter-Grabberer will return the most recent ten of that uerer's tweets. Users who have marked their accounts as "private" cannot be searched using Tweeter-Grabberer. To search by content, type a content that you would like to search (ie. World Series, PS5, Simpsons). The fifteen most popular tweets (as determined by the Twitter algorithim ) about that content will be displayed. The random page will allow the user to choose one of my five favorite Twitter users, and will display a random tweet from that user's most recent ten tweets. 


Access the app [here](https://mighty-reaches-83026.herokuapp.com/)

![Home-Page ScreenShot](https://github.com/danielmurphy1/twitter-api-app/blob/main/client/src/images/home.JPG)

![Search-Page ScreenShot](https://github.com/danielmurphy1/twitter-api-app/blob/main/client/src/images/searchJPG.JPG)

![Random-Page ScreenShot](https://github.com/danielmurphy1/twitter-api-app/blob/main/client/src/images/random.JPG)

![Random-Tweet ScreenShot](https://github.com/danielmurphy1/twitter-api-app/blob/main/client/src/images/randomtweetJPG.JPG)



### Summary

This application is my fifth using React, and my third in consuming an API. Additionally, this is my first application in creating and maintaining a backend. The backend in set up as an internal API that handles frontend requests, sends those requests to the Twitter API, receives the response data, and serves that data back to the frontend. This is my first full-stack application. 

In creating this app, I learned how to work with Express and Node for the backend in order to create a full-stack application. Doing so was challenging, but it was also very rewarding to teach myself the basics of backend development. Moreover, as the Twitter API is more complicated than the previous API's with which I have worked (see StarWars API application and Brewery Database Application [here](https://github.com/danielmurphy1/star-wars-api) and[here](https://github.com/danielmurphy1/brewery-database-app), respectively), I also learned quite a bit more about requesting data from an external source, using PostMan, and navigating published documentation for external data sources so that I was able to get information that I needed. 

For the styling, I mostly took advantage of the Bootstrap library, but also added some of my own custom styling for some components using CSS (and thus navigating and correcting Bootstrap and custom styling conflicts so that I received the desired styling outcomes.)

### Author

- Dan Murphy - Software Developer
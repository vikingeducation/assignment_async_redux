# GoodReads Book Search Assignment

## Assignment
This assignment begins to look into using redux-thunk to create asynchronous requests in React/Redux, while also implementing a simple back end to retrieve data from the GoodReads API.

## Technologies Used
In addition to React/Redux, redux-thunk is utilized in conjunction with the Fetch API to create asynchronous calls to an Express back end, which retrieves data from the GoodReads API. 

## Getting Started
To run this on your local machine, simply clone the repository then install the dependencies using `yarn`/`npm install`. You will then need to register for an API key from GoodReads. Finally, set up a `.env` file with the following information:

```
GOODREADS_API_KEY=YOUR_KEY_HERE
```

Finally, run `yarn start` to launch the application. If you are using `npm`, please modify the `start-client.js` and `package.json` files accordingly. 

## Deployment Link
A deployed version of this project may be found [here.](https://afternoon-springs-28518.herokuapp.com/)
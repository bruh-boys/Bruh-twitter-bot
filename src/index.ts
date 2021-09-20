import express from "express";
import dotenv from "dotenv";

const app = express()

dotenv.config({path: './.env'})

app.set('port', process.env.PORT || 3000)

const port = app.get('port')

app.use('/', (req, res)=>{
    res.send(`${process.env.MENSAJE}`)
})

// Twitter

import Twitter from "twitter";

const client = new Twitter({
  consumer_key:         process.env.KEY,
  consumer_secret:      process.env.KEY_SECRET,
  access_token_key:     process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  bearer_token:         process.env.BAERER_TOKEN
});

client.post('statuses/update', {status: '10 visitas hoy'}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
      console.log(response);
    }else{
        console.log(error);
        
    }
});
  

////

app.listen(port, ()=>{
    console.log(`Online on port ${port}`)
})
import express from "express";
import dotenv from "dotenv";

const app = express()

dotenv.config({path: './.env'})

app.set('port', 3000)

const port = app.get('port')

app.get('/', (req, res)=>{

    res.send(`<h1> ${process.env.MENSAJE} </h1>`)
    
})

// Twiter

import Twitter from "twitter";

const tweet_write = new Twitter({
    consumer_key:         process.env.KEY,
    consumer_secret:      process.env.KEY_SECRET,
    access_token_key:     process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET
})

const tuitxD = 'Bruh Sound Effect #2 - 22.690.690 views'

// Lo unico que importa:

const hoy = () => {
    var dia = new Date()
    return dia

}


const publicar = () =>{
    setInterval(() => {
        tweet_write.post('statuses/update', {status: `Estoy en face de desarrollo asi que por ahora solo digo la hora. Son las: ${hoy().getHours()}:${hoy().getMinutes()}:${hoy().getSeconds()} xD`},  function(error, tweet, response) {
            if(error) throw error;
            console.log(tweet);
            console.log('si, ya son'); 
        })
    }, 300000);
    // 5mn: 300000,15 mn: 900000, media hora: 1800000 x 2
}


app.listen(port, ()=>{
    console.log(`Online on port ${port}`)

    console.log(`${hoy().getHours()}:${hoy().getMinutes()}:${hoy().getSeconds()}:${hoy().getUTCMilliseconds()}`);
    publicar()
})
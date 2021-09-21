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

const mensaje_xD = `
    
----------------------------------------------------------------------------------------
/////////////       //////////////         //////////////    ||             ///      ///
///        ||/     ////        ////       ////               ||              ///    ///
///        ||/    ////          ////      ///                ||               ///  ///
/////////////    ||||            ||||     //                 ||                //////
//////////       ||||            ||||     //                 ||/////////        //// 
///    ////      ////            ////     ///                ||        //       ///
///     ////      ////          ////      ////               ||         ||     ///
///      ////      ////////////////        //////////////    ||         ||    ///
----------------------------------------------------------------------------------------

`



// Lo unico que importa:

const YouTube = require('youtube-node');

const youTube = new YouTube();

youTube.setKey(process.env.GOOGLE_API_KEY);


const twit_opa_opa = () =>{
    youTube.getById('2ZIpFytCSVc', function(error: any, result: any) {
        if (error) {
          console.log(error);
        }
        else {
            tweet_write.post('statuses/update', {status: `The video "Bruh Sound Effect # 2" currently has ${result.items[0].statistics.viewCount} views on Youtube.. (https://www.youtube.com/watch?v=2ZIpFytCSVc)`},  function(error, tweet, response) {
                if(error) throw error;
                console.log(mensaje_xD); 
            })
        }
    })
}
 

const publicar = () =>{

        twit_opa_opa()

    setInterval(() => {

        twit_opa_opa()

    }, 3600000);
    // 5mn: 300000, 15 mn: 900000, media hora: 1800000, hora: 3600000
}

app.listen(port, ()=>{
    console.log(`Online on port ${port}`)
    console.log();
    
    publicar()
})
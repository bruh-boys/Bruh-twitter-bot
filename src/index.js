"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: './.env' });
app.set('port', 3000);
const port = app.get('port');
app.get('/', (req, res) => {
    res.send(`<h1> ${process.env.MENSAJE} </h1>`);
});
// Twiter
const twitter_1 = __importDefault(require("twitter"));
const tweet_write = new twitter_1.default({
    consumer_key: process.env.KEY,
    consumer_secret: process.env.KEY_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
const tuitxD = 'Bruh Sound Effect #2 - 22.690.690 views';
// Lo unico que importa:
const hoy = () => {
    var dia = new Date();
    return dia;
};
const publicar = () => {
    setInterval(() => {
        tweet_write.post('statuses/update', { status: `Estoy en face de desarrollo asi que por ahora solo digo la hora. Son las: ${hoy().getHours()}:${hoy().getMinutes()}:${hoy().getSeconds()} xD` }, function (error, tweet, response) {
            if (error)
                throw error;
            console.log(tweet);
            console.log('si, ya son');
        });
    }, 300000);
    // 5mn: 300000,15 mn: 900000, media hora: 1800000 x 2
};
app.listen(port, () => {
    console.log(`Online on port ${port}`);
    console.log(`${hoy().getHours()}:${hoy().getMinutes()}:${hoy().getSeconds()}:${hoy().getUTCMilliseconds()}`);
    publicar();
});

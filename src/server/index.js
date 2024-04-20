import express from 'express';
import axios from "axios";
import bodyParser from 'body-parser';
import pino from 'express-pino-logger';


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/get-speech-token', async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    const speechKey = 'c91eff3d67fe4d0ea58798eaafd25aa6';
    const speechRegion = 'eastus';

    if (speechKey === 'paste-your-speech-key-here' || speechRegion === 'paste-your-speech-region-here') {
        res.status(400).send('You forgot to add your speech key or region to the .env file.');
    } else {
        const headers = { 
            headers: {
                'Ocp-Apim-Subscription-Key': speechKey,
                'Host': 'eastus.api.cognitive.microsoft.com',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        try {
            const tokenResponse = await axios.post(`https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, headers);
            res.send({ token: tokenResponse.data, region: speechRegion });
        } catch (err) {
            res.status(401).send('There was an error authorizing your speech key.');
        }
    }
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);
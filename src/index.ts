import express from 'express';
import routes from './api/routes/index';
import {AppConfig} from "./config/AppConfig";
import bodyParser from 'body-parser';

const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

app.use(routes);


app.listen(AppConfig.PORT, () => {
    console.log(`Server listening on port ${AppConfig.PORT}`);
});

import express from 'express';
import config from './config';
const morgan = require('morgan');
import cors from 'cors';
import videoRoutes from './routes/videos.routes';

const app = express();

app.set('port', config.PORT);

/*Middlewares */
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Las putas rutas van a final
app.use(videoRoutes)

export default app;
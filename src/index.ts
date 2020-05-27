import express from 'express';
import morgan from 'morgan';
import cookieSession from 'cookie-session';
import {router} from './routes/loginRoutes';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ['fssafkk']}));
app.use(router);

app.listen(3020, () => {
  console.log('Listing on port 3020');
});

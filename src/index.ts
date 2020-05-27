import express from 'express';
import morgan from 'morgan';
import {router} from './routes/loginRoutes';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(3020, () => {
  console.log('Listing on port 3020');
});

import express, {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(/*javascript */ `
    <div>
      <h1>Hi there!</h1>
    </div>
  `);
});

app.listen(3020, () => {
  console.log('Listing on port 3020');
});

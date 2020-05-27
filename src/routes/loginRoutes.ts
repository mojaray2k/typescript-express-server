import {Router, Request, Response} from 'express';

interface RequestWithBody extends Request {
  body: {[key: string]: string | undefined};
}

const router = Router();

router.get('/', (req: RequestWithBody, res: Response) => {
  res.send(/*javascript */ `
    <div>
      <h1>Hi there!</h1>
    </div>
  `);
});

router.get('/login', (req: RequestWithBody, res: Response) => {
  res.send(/*javascript */ `
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password} = req.body;
  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.send('You must provide an email');
  }
});

export {router};

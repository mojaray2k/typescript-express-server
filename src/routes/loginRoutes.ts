import {Router, Request, Response, NextFunction} from 'express';

interface RequestWithBody extends Request {
  body: {[key: string]: string | undefined};
}

function requireAuth(
  req: RequestWithBody,
  res: Response,
  next: NextFunction
): void {
  if (req.session && req.session.loggedIn) {
    return next();
    return;
  }

  res.status(403);
  res.send('not permitted');
}

const router = Router();

router.get('/', (req: RequestWithBody, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(/*javascript */ `
    <div>
      <h1>You are logged in</h1>
      <a href="/logout">Logout</a>
    </div>
  `);
  } else {
    res.send(/*javascript */ `
    <div>
      <h1>You are not logged in</h1>
      <a href="/login">Login</a>
    </div>
  `);
  }
});

router.get('/login', (req: RequestWithBody, res: Response) => {
  res.send(/*javascript */ `
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" value='hi@hi.com'/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" value='password'/>
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password} = req.body;
  if (email && password && email === 'hi@hi.com' && password === 'password') {
    // mark this person as logged in
    req.session = {loggedIn: true};
    // redirect them to the root route
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/logout', (req: RequestWithBody, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
  res.send('Welcome to protected route logged in user');
});

export {router};

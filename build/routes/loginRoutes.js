"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
        return;
    }
    res.status(403);
    res.send('not permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send(/*javascript */ "\n    <div>\n      <h1>You are logged in</h1>\n      <a href=\"/logout\">Logout</a>\n    </div>\n  ");
    }
    else {
        res.send(/*javascript */ "\n    <div>\n      <h1>You are not logged in</h1>\n      <a href=\"/login\">Login</a>\n    </div>\n  ");
    }
});
router.get('/login', function (req, res) {
    res.send(/*javascript */ "\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" value='hi@hi.com'/>\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" value='password'/>\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // mark this person as logged in
        req.session = { loggedIn: true };
        // redirect them to the root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route logged in user');
});

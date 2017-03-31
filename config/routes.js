const express     = require('express');
const controllers = require('../src/controllers');
const passport = require('passport');
const isAuthenticated = require('../src/lib/auth').isAuthenticated;
const router = express.Router();

router.get('/', controllers.homepage.index);
router.get('/dashboard', isAuthenticated, controllers.dashboard.index);
router.get('/leaderboard', isAuthenticated, controllers.leaderboard.index);
router.get('/auth/logout', controllers.auth.logout);
router.get('/auth/github', passport.authenticate('github'));
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), controllers.auth.login);

exports.router = router;

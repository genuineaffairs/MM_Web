import express from 'express';
import passport from 'passport';

import {
  loginController,
  signupController,
  logoutController,
  changePasswordController
} from './authControllers';

import '../../middleware/validation/passport';

const router = express.Router();

router.route('/login')
  .post(passport.authenticate('local', { session: false }), loginController);

router.route('/signup')
  .post(signupController);

router.route('/changepassword')
  .post(passport.authenticate('local', { session: false }), changePasswordController);

router.route('/logout')
  .get(logoutController);

export default router;
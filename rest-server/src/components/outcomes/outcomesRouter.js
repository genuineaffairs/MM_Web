import express from 'express';

import {
  fetchStarredMatchesController,
  fetchAllMatchesController,
  starSingleMatchController,
  unstarSingleMatchController
} from './outcomesControllers';

const router = express.Router();

router.route('/fetchStarredMatches/:userId').get(fetchStarredMatchesController);

router
  .route('/fetchAllMatches/:userId')
  .get(fetchAllMatchesController);

router
  .route('/starSingleMatch/:userId/:matchId')
  .put(starSingleMatchController)

router
  .route('/unstarSingleMatch/:userId/:matchId')
  .put(unstarSingleMatchController)

export default router;

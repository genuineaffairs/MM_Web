import express from 'express';

import {
  fetchAllTagsController,
  fetchUserAndTheirPreferenceTagsController,
  putUserAndPreferenceTagsController,
  saveTagsController,
} from '../tags/tagsController';

const router = express.Router();

router.route('/fetchAllTags').get(fetchAllTagsController);

//gets all user tags and user's preference tags
router
  .route('/fetchUserAndTheirPreferenceTags/:userId/:type')
  .get(fetchUserAndTheirPreferenceTagsController);

//for when the user wants to change their own tags or their preference tags
router
  .route('/userAndPreferenceTags/:type/:userId/')
  .put(putUserAndPreferenceTagsController);

router
  .route('/saveTags/:userId/')
  .put(saveTagsController);

export default router;

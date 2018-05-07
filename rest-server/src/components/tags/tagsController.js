import {
  fetchAllTagsQuery,
  fetchUserAndTheirPreferenceTagsQuery,
  putUserAndPreferencesTagsQuery
} from './tagsQueries';

export const fetchAllTagsController = async (req, res) => {
  try {
    const data = await fetchAllTagsQuery();
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchAllTagsController', err);
  }
};

export const fetchUserAndTheirPreferenceTagsController = async (req, res) => {
  try {
    const { userId, type } = req.params;
    const data = await fetchUserAndTheirPreferenceTagsQuery(userId, type);
    res.status(200).send(data);
  } catch (err) {
    console.log('Error on fetchUserAndTheirPreferenceTags', err);
  }
};

export const putUserAndPreferenceTagsController = async (req, res) => {
  try {
    const { type, userId } = req.params;
    const binaryType = type === 'user' ? 0 : 1;
    await putUserAndPreferencesTagsQuery(userId, req.body, binaryType);
    res.status(200).send('[Web] Added Tags');
  } catch (err) {
    console.log('Error on putUserAndPreferenceTagsController', err);
  }
};

  export const saveTagsController = async (req, res) => {
    try {
      const { userId } = req.params;
      await putUserAndPreferencesTagsQuery(userId, req.body.user, 0);
      await putUserAndPreferencesTagsQuery(userId, req.body.pref, 1);
      res.status(200).send('[Mobile] Added Tags');
    } catch (err) {
      console.log('Error on saveTagsController', err);
  }
};

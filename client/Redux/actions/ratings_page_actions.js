import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  submitRating(ratingObject) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      const total = getState().ratings.length;
      try {
        await axios.put(
          `${REST_SERVER_URL}/api/ratings/updateUserRating`,
          ratingObject
        );
        if (total === 1) {
          const data = await axios.get(
            `${REST_SERVER_URL}/api/ratings/fetchMultipleUsers/${id}`
          );
          dispatch({
            type: 'ADDITIONAL_USERS_TO_RATE_ADDED',
            payload: data.data,
          });
        }
        dispatch({
          type: 'RATING_SUBMITTED',
        });
      } catch (err) {
        console.error;
      }
    };
  }
};

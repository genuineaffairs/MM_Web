import axios from 'axios';

const { REST_SERVER_URL } = process.env;

export default {
  fetchMoreUsersToRate() {
    return async (dispatch, getState) => {
      const { id } = await getState().accountData;
      try {
        const data = await axios.get(
          `${REST_SERVER_URL}/api/ratings/fetchMultipleUsers/${id}`
        );
        dispatch({
          type: 'ADDITIONAL_USERS_TO_RATE_ADDED',
          payload: data.data
        });
      } catch (err) {
        console.error;
      }
    };
  },
  submitRating(ratingObject) {
    return async (dispatch, getState) => {
      const { id } = getState().accountData;
      const total = getState().ratings.length;
      try {
        await axios.put(
          `${REST_SERVER_URL}/api/ratings/updateUserRating`,
          ratingObject
        );
        dispatch({
          type: 'RATING_SUBMITTED',
        });
        if (total === 1) {
          const data = await axios.get(
            `${REST_SERVER_URL}/api/ratings/fetchMultipleUsers/${id}`
          );
        dispatch({
          type: 'ADDITIONAL_USERS_TO_RATE_ADDED',
          payload: data.data,
        });
        }
      } catch (err) {
        console.error;
      }
    };
  }
};

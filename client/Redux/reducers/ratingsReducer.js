let initialState = [{
  id: 1,
  firstname: " ",
  lastname: " ",
  age: 19900101,
  location: 90409,
  bio: " ",
  gender: 2,
  tags: [],
  photos: [],
}];


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'RATINGS_DATA_RECIEVED':
      return payload;
    case 'RATING_SUBMITTED': 
      let rest = state;
      rest.pop()
      return [...rest]
    case 'ADDITIONAL_USERS_TO_RATE_ADDED':
      return [ ...payload, ...state ];
    default:
      return state;
  }
};
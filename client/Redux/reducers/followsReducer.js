export default (state = { starred: [], allOthers: [] }, { type, payload }) => {
  switch (type) {
    case 'USER_FOLLOWS_RECIEVED':
      return (state = payload);
    case 'FOLLOW_STARRED_SUCCESS': 
      return (state = payload);
    case 'FOLLOW_UNSTARRED_SUCCESS':
      return (state = payload);
    default:
      return state;
  }
};

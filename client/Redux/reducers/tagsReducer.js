let initialState = 
  {
    user: [], 
    pref: [],
  }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'USER_TAGS_RECIEVED':
      return { ...state, ...payload};
    case 'USER_TAGS_UPDATED':
      return { ...state, [payload.type]: payload.tags}
    default:
      return state;
  }
}


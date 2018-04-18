
let entryState = 
  {
    user: [], 
    pref: [],
  }




export default (state = entryState, { type, payload }) => {
  switch (type) {
    case 'USER_TAGS_RECIEVED':
      return { ...state, ...payload};
    case 'USER_TAGS_UPDATED':
      return { ...state, [payload.type]: payload.tags}
    default:
      return state;
  }
}


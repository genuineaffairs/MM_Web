

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'USER_PHOTOS_RECIEVED':
      return (state = payload);
    case 'USER_PHOTO_ADDED':
      return (state = payload);
    case 'USER_PHOTO_DELETED': {
      return [
        ...state.slice(0, payload),
        ...state.slice(payload + 1)
      ]
    }
    case 'USER_PRIMARY_PHOTO_UPDATED': {
      return [
        state[payload], 
        ...state.slice(0, payload), 
        ...state.slice(payload + 1)
      ]
    }
    default:
      return state;
  }
}
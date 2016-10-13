export default(state = null, action) => {
  switch (action.type) {
    case 'select_repo':
      return action.payload;
    default:
      return state;
  }
}

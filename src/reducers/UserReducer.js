// const INITIAL_STATE = { };

export default (state = { user: {}}, action) => {
  switch (action.type) {
    case 'GET_USER': // action.name set in actions/index.js
      // Should it be this so we're creating a copy and not mutating it directly
      // the problem is, it does this { user: user{} }
      // but i want this { user: {} }
      return {...state, user: action.user};
      // i mitigate this by calling "state.user.user" in container

      // return action.user // this would work
    default:
      return state
  }
}

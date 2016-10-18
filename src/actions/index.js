import axios from 'axios';

export const selectRepo = (repoId) => {
  return {
    type: 'select_repo',
    payload: repoId
  }
}

export const getUser = (user)  => {
  return (dispatch) => {
    axios.get('https://api.github.com/users/samanthaming')
          .then(response => dispatch({type: 'GET_USER', user: response.data}))
  }
}

import { connect } from 'react-redux'
import { getUser } from '../actions'
import UserCard from '../components/UserCard'

const mapStateToProps = (state) => ({
   user: state.user.user // props.user
})

const mapDispatchToProps = (dispatch) => ({
   onGetUser: (name) => { // props.stateMethod
     dispatch(getUser(name)) // getUser from actions/index.js
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)

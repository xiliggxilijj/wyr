import { SET_DATA_LOADING } from '../actions/dataLoading'

export default function dataLoading (state = null, action) {
  switch (action.type) {
    case SET_DATA_LOADING :
      return action.dataLoading
    default :
      return state
  }
}

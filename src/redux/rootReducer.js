import { combineReducers } from 'redux';
import { initialRootState } from './store';
import Users from './users/reducers';


const rootReducer = combineReducers({
  users:Users,
});


export default rootReducer;

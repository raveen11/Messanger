import actions from './actions';
import axios from 'axios';

const { getUserBegin,getUserSucces,getUserError,getUserContainerSucces } = actions;



const getUsers = (pageNo) => {
  return async dispatch => {
    try {
      dispatch(getUserBegin());
      const resp = await axios.get(`https://gorest.co.in/public/v1/users?page=${pageNo}`);
      const sorteddata=resp?.data?.data?.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
      dispatch(getUserSucces(sorteddata));
      dispatch(getUserContainerSucces());  
      return true;
      
    } catch (err) {
      dispatch(getUserError(err));
      return false;
    }
  };
};







export { getUsers};

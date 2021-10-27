import actions from './actions';

const { 
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_CONTAINER_SUCCESS,
 } = actions;

const initState = {
  users:[],
  allUsers:[]
  
};

const Users = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case GET_USER_BEGIN:
    return {
        ...state,
        loading: true,
        
      };
    case GET_USER_SUCCESS:
        return {
          ...state,
          // users: [
          //   ...(state.users || []),
          //   ...data,
          // ],
          users:data,
          loading: false,
        }; 
        
      case GET_USER_CONTAINER_SUCCESS:
          return {
            ...state,
            allUsers: [
              ...state.users,
              ...state.allUsers
            ],
            // users:data,
            loading: false,
          };     

    case GET_USER_ERROR:
        return {
            ...state,
            loading: false,
            
          };  
   
    default:
      return state;
  }
};
export default Users;

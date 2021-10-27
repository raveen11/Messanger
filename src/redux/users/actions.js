const actions = {
    GET_USER_BEGIN: 'GET_USER_BEGIN',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_ERROR: 'GET_USER_ERROR',
    GET_USER_CONTAINER_SUCCESS:'GET_USER_CONTAINER_SUCCESS',
  

  
    getUserBegin: () => {
      return {
        type: actions.GET_USER_BEGIN,
      };
    },
   

    getUserSucces: data => {
      return {
        type: actions.GET_USER_SUCCESS,
        data,
      };
    },

    getUserContainerSucces: data => {
      return {
        type: actions.GET_USER_CONTAINER_SUCCESS,
      };
    },

    getUserError: () => {
      return {
        type: actions.GET_USER_ERROR,
      };
    },
  
  };
  
  export default actions;
  
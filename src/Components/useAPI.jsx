

import { useReducer } from 'react';
import axios from 'axios';


const initialState = {
  data: null,
  loading: false,
  error: null,
};


const apiReducer = (state, action) => {
  switch (action.type) {
    case 'API_REQUEST':
      return {
        ...state,
        loading: true,
        error: null, 
      };
    case 'API_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'API_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state; 
  }
};

const useApi = () => {

  const [state, dispatch] = useReducer(apiReducer, initialState);

 
  const request = async (method, url, body = null) => {
    try {
    
      dispatch({ type: 'API_REQUEST' });

    
      const config = {
        method: method.toLowerCase(),
        url: url,
        data: body, 
      };

     
      const response = await axios(config);

    
      dispatch({ type: 'API_SUCCESS', payload: response.data });
      
      
      return response.data;

    } catch (err) {
     
      const errorMessage = err.response ? err.response.data : 'An unexpected error occurred';
      
  
      dispatch({ type: 'API_FAILURE', payload: errorMessage });
      
      throw err;
    }
  };

 
  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    request, 
  };
};

export default useApi;



import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILD,
    
  } from '../actions/types';
  import AsyncStorage from '@react-native-community/async-storage'
  
  const INITIAL_STATE = {
    
    loading: false,
    user: null
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.types) {
  
      case LOGIN_START:
        return {
          ...state,
          loading: true,
        };

        case LOGIN_SUCCESS:
            return {
              ...state,
              loading: false,
              user: action.payload
            };

            case LOGIN_FAILD:
                return {
                  ...state,
                  loading: false,
                };
  
  
      
  
  
      default:
        return state;
    }
  };
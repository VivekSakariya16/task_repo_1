import {legacy_createStore} from 'redux'

const initialState = {
  inputValue: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(rootReducer);

export default store;

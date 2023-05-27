// reducers/form.js

const initialState = {
    form: {
        name: '',
        address: '',
        age: ''
      }
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_NAME':
        return { ...state, name: action.payload };
      case 'UPDATE_ADDRESS':
        return { ...state, address: action.payload };
      case 'UPDATE_AGE':
        return { ...state, age: action.payload };
      default:
        return state;
    }
  };
  
  export default formReducer;
  
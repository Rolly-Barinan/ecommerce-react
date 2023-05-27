// Define the action types
import axios from "axios";
export const SET_NAME = "SET_NAME";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_AGE = "SET_AGE";
export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_USERNAME = "SET_USERNAME";
export const SET_CITY = "SET_CITY";
export const SET_STATE = "SET_STATE";
export const SET_ZIP = "SET_ZIP";
export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
export const SET_CAR_ID = "SET_CAR_ID";
export const SET_CAR_NAME = "SET_CAR_NAME";
export const SET_CAR_BRAND = "SET_CAR_BRAND";
export const SET_CAR_TRANSMISSION = "SET_CAR_TRANSMISSION";
export const SET_CAR_CAPACITY = "SET_CAR_CAPACITY";
export const SET_CAR_PRICE = "SET_CAR_PRICE";
export const SET_NO_DAYS = "SET_NO_DAYS";
///user login///
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";
/////////user register////
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
// Define the action creators

export const setFirstName = (firstName) => ({
  type: SET_FIRST_NAME,
  payload: firstName,
});

export const setLastName = (lastName) => ({
  type: SET_LAST_NAME,
  payload: lastName,
});

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const setState = (state) => ({
  type: SET_STATE,
  payload: state,
});

export const setZip = (zip) => ({
  type: SET_ZIP,
  payload: zip,
});

export const setTotalPrice = (totalPrice) => ({
  type: SET_TOTAL_PRICE,
  payload: totalPrice,
});

export const setCarId = (carId) => ({
  type: SET_CAR_ID,
  payload: carId,
});

export const setCarName = (carName) => ({
  type: SET_CAR_NAME,
  payload: carName,
});

export const setCarBrand = (carBrand) => ({
  type: SET_CAR_BRAND,
  payload: carBrand,
});

export const setCarTransmission = (carTransmission) => ({
  type: SET_CAR_TRANSMISSION,
  payload: carTransmission,
});

export const setCarCapacity = (carCapacity) => ({
  type: SET_CAR_CAPACITY,
  payload: carCapacity,
});

export const setCarPrice = (carPrice) => ({
  type: SET_CAR_PRICE,
  payload: carPrice,
});
export const setNoDays = (carDay) => ({
  type: SET_NO_DAYS,
  payload: carDay,
});

/////////////////////////////////----login action------------------------
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/users/login/",

      { username: email, password: password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
////////////////register action-----------

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "users/register/",

      { name: name, email: email, password: password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

// Define the initial state
const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  city: "",
  state: "",
  zip: "",
  totalPrice: 0.0,
  carId: "",
  carName: "",
  carBrand: "",
  carTransmission: "",
  carCapacity: "",
  carPrice: "",
  carDay: 0,
};

// Define the reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      console.log("Setting first name to:", action.payload);
      return { ...state, firstName: action.payload };
    case SET_LAST_NAME:
      console.log("Setting last name to:", action.payload);
      return { ...state, lastName: action.payload };
    case SET_USERNAME:
      console.log("Setting username to:", action.payload);
      return { ...state, username: action.payload };
    case SET_CITY:
      console.log("Setting city to:", action.payload);
      return { ...state, city: action.payload };
    case SET_STATE:
      console.log("Setting state to:", action.payload);
      return { ...state, state: action.payload };
    case SET_ZIP:
      console.log("Setting zip to:", action.payload);
      return { ...state, zip: action.payload };
    case SET_TOTAL_PRICE:
      console.log("Setting total price to:", action.payload);
      return { ...state, totalPrice: action.payload };
    case SET_CAR_ID:
      console.log("Setting car ID to:", action.payload);
      return { ...state, carId: action.payload };
    case SET_CAR_NAME:
      console.log("Setting car name to:", action.payload);
      return { ...state, carName: action.payload };
    case SET_CAR_BRAND:
      console.log("Setting car brand to:", action.payload);
      return { ...state, carBrand: action.payload };
    case SET_CAR_TRANSMISSION:
      console.log("Setting car transmission to:", action.payload);
      return { ...state, carTransmission: action.payload };
    case SET_CAR_CAPACITY:
      console.log("Setting car capacity to:", action.payload);
      return { ...state, carCapacity: action.payload };
    case SET_CAR_PRICE:
      console.log("Setting car price to:", action.payload);
      return { ...state, carPrice: action.payload };
    case SET_NO_DAYS:
      console.log("Setting car price to:", action.payload);
      return { ...state, carDay: action.payload };
    default:
      console.log("Returning state:", state);
      return state;
  }
};

export const userLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { laoding: true };
    case USER_LOGIN_SUCCESS:
      return { laoding: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { laoding: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export default userReducer;

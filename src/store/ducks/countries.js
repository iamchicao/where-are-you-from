/**
 * Types
 */

export const Types = {
  GET_COUNTRIES_REQUEST: 'countries/GET_REQUEST',
  GET_COUNTRIES_SUCCESS: 'countries/GET_SUCCESS',
  TOGGLE_DARK_MODE: 'dark_mode/TOGGLE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: [],
  darkMode: false,
};
export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_COUNTRIES_SUCCESS:
      return { ...state, data: action.payload.data };
    case Types.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  getCountries: (name = '', filter = '') => ({
    type: Types.GET_COUNTRIES_REQUEST,
    payload: { name, filter },
  }),
  getCountriesSuccess: data => ({
    type: Types.GET_COUNTRIES_SUCCESS,
    payload: { data },
  }),
  toggleDarkMode: () => ({
    type: Types.TOGGLE_DARK_MODE,
  }),
};

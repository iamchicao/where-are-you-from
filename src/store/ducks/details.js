/**
 * Types
 */

export const Types = {
  GET_DETAILS_REQUEST: 'details/GET_REQUEST',
  GET_DETAILS_SUCCESS: 'details/GET_SUCCESS',
};

/**
 * Reducers
 */

const INITIAL_STATE = {};
export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_DETAILS_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  getDetails: name => ({
    type: Types.GET_DETAILS_REQUEST,
    payload: { name },
  }),
  getDetailsSuccess: data => ({
    type: Types.GET_DETAILS_SUCCESS,
    payload: { data },
  }),
};

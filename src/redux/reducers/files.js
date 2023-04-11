import {
  REQUEST_FILES,
  REQUEST_FILES_SUCCESS,
  REQUEST_FILES_FAILED,
} from "../actions/files";

const initialState = {
  files: [],
  isLoading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FILES:
      return {
        ...state,
        isLoading: true,
      };

    case REQUEST_FILES_SUCCESS:
      return {
        ...state,
        files: action.payload.files,
        isLoading: false,
      };

    case REQUEST_FILES_FAILED:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };

    default:
      return { ...state };
  }
}

export default reducer;

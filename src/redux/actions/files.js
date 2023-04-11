import fileServices from "../../services/file";

export const REQUEST_FILES = "REQUEST_FILES";
export const REQUEST_FILES_SUCCESS = "REQUEST_FILES_SUCCESS";
export const REQUEST_FILES_FAILED = "REQUEST_FILES_FAILED";

export const requestFiles = (text) => {
  return async (dispatch) => {
    dispatch(requestFilesStarted());
    try {
      let data = await fileServices.getFileData(text);
      dispatch(requestFilesSuccess(data));
    } catch (error) {
      dispatch(requestFilesFailed(error));
    }
  };
};

export const requestFilesStarted = () => {
  return {
    type: REQUEST_FILES,
  };
};

export const requestFilesSuccess = (files) => {
  return {
    type: REQUEST_FILES_SUCCESS,
    payload: {
      files,
    },
  };
};

export const requestFilesFailed = (error) => {
  return {
    type: REQUEST_FILES_FAILED,
    payload: {
      error,
    },
  };
};

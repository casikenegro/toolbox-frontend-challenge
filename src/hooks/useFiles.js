import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestFiles } from "../redux/actions/files";

function useFiles() {
  const { isLoading, files, error } = useSelector((state) => state.files);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestFiles());
  }, [dispatch]);

  return { isLoading, files, error };
}

export default useFiles;

import { Spinner } from "react-bootstrap";
import Table from "./table";
import { Fragment } from "react";
import useFiles from "../hooks/useFiles";
import useFileSearch from "../hooks/useFileSeatch";
import ErrorView from "./error-view";
import TextInput from "./text-input";

function MainView() {
  const { isLoading, files, error } = useFiles();
  const [input, onChange] = useFileSearch();

  if (error) return <ErrorView error={error} />;

  return (
    <Fragment>
      <TextInput value={input} onChange={onChange} />
      <Fragment>
        {isLoading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : (
          <div>
            <Table data={files} onClick={onChange} />
          </div>
        )}
      </Fragment>
    </Fragment>
  );
}

export default MainView;

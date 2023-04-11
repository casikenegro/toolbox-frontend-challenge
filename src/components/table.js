import { Fragment, useCallback } from "react";
import { Table as RBTable } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { requestFiles } from "../redux/actions/files";

function Table({ data, onClick }) {
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (file) => {
      dispatch(requestFiles(file));
      typeof onClick === "function" && onClick({ target: { value: file } });
    },
    [dispatch]
  );

  return (
    <RBTable striped bordered hover className="text-center">
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map((file, index) => {
          return file.lines.map((line, lIndex) => {
            return (
              <Fragment key={`file-line-${index}-${lIndex}`}>
                <tr onClick={() => handleClick(line.file)}>
                  <td>{line.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              </Fragment>
            );
          });
        })}
      </tbody>
    </RBTable>
  );
}

export default Table;

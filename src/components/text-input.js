import { Form } from "react-bootstrap";

function TextInput({ onChange, value }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="text-left">File Name</Form.Label>
      <Form.Control
        onChange={onChange}
        value={value}
        type="text"
        placeholder=""
      />
    </Form.Group>
  );
}

export default TextInput;

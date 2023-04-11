import { Alert } from "react-bootstrap";

function ErrorView({ error }) {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh no, hubo un error!</Alert.Heading>
      {typeof error === "object" && error.message && <p>{error.message}</p>}
    </Alert>
  );
}

export default ErrorView;

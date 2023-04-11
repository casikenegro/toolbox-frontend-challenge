import { render } from "@testing-library/react";
import ErrorView from "./error-view";

describe("Error View Component", () => {
  const message = "Error Code: 404";

  it("it should render correctly", () => {
    const component = render(<ErrorView error={{ message }} />);

    expect(component.asFragment()).toMatchSnapshot();
  });

  it("should not render message if error prop is not an object", () => {
    const component = render(<ErrorView error={null} />);

    expect(component.getByText(message)).not.toBeInTheDocument();
  });
});

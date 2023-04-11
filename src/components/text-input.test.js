import { render } from "@testing-library/react";
import TextInput from "./text-input";

describe("Text Input Component", () => {
  const component = render(<TextInput value="file.csv" onChange={() => {}} />);

  it("should render correctly", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});

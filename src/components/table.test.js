import { render } from "@testing-library/react";
import Table from "./table";

describe("Table Component", () => {
  const component = render(<Table data={[]} />);

  it("should render correctly", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});

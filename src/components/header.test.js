import renderer from "react-test-renderer";
import Header from "./header";

describe("Header Component", () => {
  const component = renderer.create(<Header />);

  it("should render correctly", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

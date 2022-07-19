import { renderWithProviders } from "../../../tests/utils";

import SignUp from "./SignUp";

describe("presentation/Navbar", () => {
  it("should match snapshot", () => {
    const sut = <SignUp onFormFinish={() => {}} />;
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const render = renderWithProviders(sut);
    expect(render).toMatchSnapshot();
  });
});

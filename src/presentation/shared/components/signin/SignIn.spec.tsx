import { renderWithProviders } from "../../../tests/utils";

import SignIn from "./SignIn";

describe("presentation/SignIn", () => {
  it("should match snapshot", () => {
    const sut = <SignIn onFormFinish={() => {}} />;
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const render = renderWithProviders(sut);
    expect(render).toMatchSnapshot();
  });
});

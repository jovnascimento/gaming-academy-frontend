import { renderWithProviders } from "../tests/utils";

import { Home } from "./home";

describe("presentation/home", () => {
  it.skip("should match snapshot", () => {
    const sut = <Home />;
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const render = renderWithProviders(sut);
    expect(render).toMatchSnapshot();
  });
});

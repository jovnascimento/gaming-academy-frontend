import { renderWithProviders } from "../tests/utils";

import { AddCourse } from "./addCourse";

describe("presentation/addCourse", () => {
  it("should match snapshot", () => {
    const sut = <AddCourse />;
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const render = renderWithProviders(sut);
    expect(render).toMatchSnapshot();
  });
});

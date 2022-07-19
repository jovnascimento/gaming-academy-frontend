import { renderWithProviders } from "../tests/utils";

import { CoursePage } from "./course";

describe("presentation/course", () => {
  let windowSpy: any;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "window", "get");

    windowSpy.mockImplementation(() => ({
      alert: jest.fn(),
    }));
  });

  it.skip("should match snapshot", () => {
    const sut = <CoursePage />;
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const render = renderWithProviders(sut);
    expect(render).toMatchSnapshot();
  });
});

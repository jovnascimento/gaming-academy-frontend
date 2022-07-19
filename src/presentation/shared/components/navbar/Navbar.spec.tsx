import { renderWithProviders } from '../../../tests/utils'

import { Navbar } from './Navbar'

describe('presentation/Navbar', () => {
  it('should match snapshot', () => {
    const sut = <Navbar />
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const render = renderWithProviders(sut)
    expect(render).toMatchSnapshot()
  })
})

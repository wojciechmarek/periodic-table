import { render } from '@testing-library/react';

import UiSearchBar from './ui-search-bar';

describe('UiSearchBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSearchBar />);
    expect(baseElement).toBeTruthy();
  });
});

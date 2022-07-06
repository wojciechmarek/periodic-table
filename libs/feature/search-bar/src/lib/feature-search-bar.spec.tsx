import { render } from '@testing-library/react';

import FeatureSearchBar from './feature-search-bar';

describe('FeatureSearchBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureSearchBar />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import FeatureDetails from './feature-details';

describe('FeatureDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureDetails />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import FeatureTable from './feature-table';

describe('FeatureTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureTable />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import UiDetails from './ui-details';

describe('UiDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiDetails />);
    expect(baseElement).toBeTruthy();
  });
});

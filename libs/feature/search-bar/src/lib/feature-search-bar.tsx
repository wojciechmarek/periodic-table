import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureSearchBarProps {}

const StyledFeatureSearchBar = styled.div`
  color: pink;
`;

export function FeatureSearchBar(props: FeatureSearchBarProps) {
  return (
    <StyledFeatureSearchBar>
      <h1>Welcome to FeatureSearchBar!</h1>
    </StyledFeatureSearchBar>
  );
}

export default FeatureSearchBar;

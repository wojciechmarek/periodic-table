import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiSearchBarProps {}

const StyledUiSearchBar = styled.div`
  color: pink;
`;

export function UiSearchBar(props: UiSearchBarProps) {
  return (
    <StyledUiSearchBar>
      <h1>Welcome to UiSearchBar!</h1>
    </StyledUiSearchBar>
  );
}

export default UiSearchBar;

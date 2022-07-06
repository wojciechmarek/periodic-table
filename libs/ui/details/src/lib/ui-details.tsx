import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiDetailsProps {}

const StyledUiDetails = styled.div`
  color: pink;
`;

export function UiDetails(props: UiDetailsProps) {
  return (
    <StyledUiDetails>
      <h1>Welcome to UiDetails!</h1>
    </StyledUiDetails>
  );
}

export default UiDetails;

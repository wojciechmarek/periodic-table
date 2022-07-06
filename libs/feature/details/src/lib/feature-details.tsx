import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureDetailsProps {}

const StyledFeatureDetails = styled.div`
  color: pink;
`;

export function FeatureDetails(props: FeatureDetailsProps) {
  return (
    <StyledFeatureDetails>
      <h1>Welcome to FeatureDetails!</h1>
    </StyledFeatureDetails>
  );
}

export default FeatureDetails;

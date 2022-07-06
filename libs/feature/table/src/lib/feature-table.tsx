import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureTableProps {}

const StyledFeatureTable = styled.div`
  color: pink;
`;

export function FeatureTable(props: FeatureTableProps) {
  return (
    <StyledFeatureTable>
      <h1>Welcome to FeatureTable!</h1>
    </StyledFeatureTable>
  );
}

export default FeatureTable;

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiTableProps {}

const StyledUiTable = styled.div`
  color: pink;
`;

export function UiTable(props: UiTableProps) {
  return (
    <StyledUiTable>
      <h1>Welcome to UiTable!</h1>
    </StyledUiTable>
  );
}

export default UiTable;

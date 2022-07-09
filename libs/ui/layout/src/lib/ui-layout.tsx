import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiLayoutProps { }

const StyledUiLayout = styled.div`
  color: pink;
`;

export function UiLayout(props: UiLayoutProps) {
  return (
    <StyledUiLayout>
      <h1>Welcome to UiLayout!</h1>
    </StyledUiLayout>
  );
}

import styled from '@emotion/styled';
import { SearchBar } from '@periodic-table/feature/search-bar';

/* eslint-disable-next-line */
export interface LayoutProps { }

const LayoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #202B35 0%, #202C36 100%);
  display: flex;
  flex-direction: column;
`;

const LayoutMainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export function Layout(props: LayoutProps) {
  return (
    <LayoutContainer>
      <SearchBar />
      <LayoutMainContent>
        <h1>Welcome to Layout!</h1>
      </LayoutMainContent>
    </LayoutContainer>
  );
}

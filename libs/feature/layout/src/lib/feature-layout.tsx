import styled from '@emotion/styled';
import { Details } from '@periodic-table/feature/details';
import { SearchBar } from '@periodic-table/feature/search-bar';
import { Table } from '@periodic-table/feature/table';

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
  display: grid;
  /* grid-template-columns: 2fr 1fr;
  grid-gap: 1em; */
`;


export function Layout(props: LayoutProps) {
  return (
    <LayoutContainer>
      <SearchBar />
      <LayoutMainContent>
        <Table />
        {/* <Details /> */}
      </LayoutMainContent>
    </LayoutContainer>
  );
}

import styled from '@emotion/styled';
import { usePeriodicTableApi } from '@periodic-table/data-access';
import { Details } from '@periodic-table/feature/details';
import { SearchBar } from '@periodic-table/feature/search-bar';
import { Table } from '@periodic-table/feature/table';
import { Atom } from '@periodic-table/model';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface LayoutProps { }

const LayoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #202B35 0%, #202C36 100%);
  display: flex;
  flex-direction: column;
`;

const LayoutMainContent = styled.div<{
  isDetailsOpen: boolean;
}>`
  flex: 1;
  display: grid;
  grid-template-columns: ${({ isDetailsOpen }) => isDetailsOpen ? '2fr 1fr' : '1fr'};
  grid-gap: 1em;
`;



export function Layout(props: LayoutProps) {
  const { periodicTableAtoms } = usePeriodicTableApi();

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedAtom, setSelectedAtom] = useState<Atom>();

  const handleOnAtomClick = (clickedAtom: Atom) => {
    const foundAtom = periodicTableAtoms?.find((atom) => atom.symbol === clickedAtom.symbol);
    setSelectedAtom(foundAtom);

    setIsDetailsOpen(true);
  }

  const handleOnCloseClick = () => {
    setIsDetailsOpen(false);
    setSelectedAtom(undefined);
  }

  return (
    <LayoutContainer>
      <SearchBar />
      <LayoutMainContent isDetailsOpen={isDetailsOpen}>
        <Table atoms={periodicTableAtoms ?? []} handleOnAtomClick={handleOnAtomClick} />
        {isDetailsOpen && <Details atom={selectedAtom} handleOnCloseClick={handleOnCloseClick} />}
      </LayoutMainContent>
    </LayoutContainer>
  );
}

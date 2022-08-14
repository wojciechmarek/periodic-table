import styled from '@emotion/styled';
import { usePeriodicTableApi } from '@periodic-table/data-access';
import { Details } from '@periodic-table/feature/details';
import { SearchBar } from '@periodic-table/feature/search-bar';
import { Table } from '@periodic-table/feature/table';
import { Atom } from '@periodic-table/model';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

/* eslint-disable-next-line */
export interface LayoutProps { }

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #202B35 0%, #202C36 100%);
`;

export function Layout(props: LayoutProps) {
  const { periodicTableAtoms } = usePeriodicTableApi();

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedAtom, setSelectedAtom] = useState<Atom>();

  const handleOnAtomClick = (clickedAtom: Atom) => {
    if (!clickedAtom) {
      return;
    }

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
      <Table atoms={periodicTableAtoms} handleOnAtomClick={handleOnAtomClick} />
      {isDetailsOpen && <Details atom={selectedAtom} handleOnCloseClick={handleOnCloseClick} />}
      <Analytics />
    </LayoutContainer>
  );
}

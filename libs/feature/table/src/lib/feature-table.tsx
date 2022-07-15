import styled from '@emotion/styled';
import { usePeriodicTableApi } from '@periodic-table/data-access';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';


/* eslint-disable-next-line */
export interface TableProps {
  [key: string]: any;
}

const TableContainer = styled.div`
  height: 100%;
  padding: 1em;
  overflow: scroll;
`;

const PeriodicTable = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: min-content;
`;

const Atom = styled.div<{
  color?: string;
}>`
  height: 6em;
  width: 4.5em;
  padding: 0.25em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || '#fff'};
  font-weight: bold;
  border: 0.5px solid #2c485a5f;

  :hover {
    background-color: #2c485a5f;
  }

  &.row-1-space {
    grid-column: 1 / span 17;
  }

  &.row-2-space {
    grid-column: 2 / span 11;
  }

  &.row-3-space {
    grid-column: 2 / span 11;
  }
`;

const AtomNumber = styled.p`
  font-size: 0.75rem;
  width: 70%;
  text-align: end;
`;

const AtomSymbol = styled.p`
  font-size: 1.5rem;
`;

const AtomWeight = styled.p`
  font-size: 0.75rem;
  opacity: 0.5;
`;




export function Table(props: TableProps) {
  const { ...rest } = props;

  const { getPeriodicTable } = usePeriodicTableApi();

  // fetch('https://raw.githubusercontent.com/neelpatel05/periodic-table-api-go/master/data.json')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const convertedAtoms = Array.from({ length: 118 }, (_, i) => {
  //       if (i > 55 && i < 70) {
  //         return null;
  //       }

  //       if (i > 87 && i < 102) {
  //         return null;
  //       }

  //       let extraClass = '';

  //       switch (i) {
  //         case 0:
  //           extraClass = 'row-1-space';
  //           break;

  //         case 3:
  //           extraClass = 'row-2-space';
  //           break;

  //         case 11:
  //           extraClass = 'row-3-space';
  //           break;

  //         default:
  //           break;
  //       }

  //       return {
  //         id: i + 1,
  //         name: data[i]?.symbol,
  //         weight: data[i]?.atomicMass,
  //         color: data[i]?.cpkHexColor,
  //         extraClass
  //       }
  //     }).filter((atom) => atom !== null);

  //     setAtoms(convertedAtoms);
  //   });


  return (
    <TableContainer {...rest}>
      <PeriodicTable>
        {getPeriodicTable.data?.map((atom) => (
          <Atom className={atom?.name} key={atom?.name} color={`#${atom?.cpkHexColor}`}>
            <AtomNumber>{atom?.atomicNumber}</AtomNumber>
            <AtomSymbol>{atom?.symbol}</AtomSymbol>
            <AtomWeight>{atom?.yearDiscovered}</AtomWeight>

          </Atom>
        ))}
      </PeriodicTable>
    </TableContainer >
  );
}

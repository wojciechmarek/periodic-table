import styled from '@emotion/styled';

const atomsSymbols = new Map([
  [1, 'H'],
  [2, 'He'],
  [3, 'Li'],
  [4, 'Be'],
  [5, 'B'],
  [6, 'C'],
  [7, 'N'],
  [8, 'O'],
  [9, 'F'],
  [10, 'Ne'],
  [11, 'Na'],
  [12, 'Mg'],
  [13, 'Al'],
  [14, 'Si'],
  [15, 'P'],
  [16, 'S'],
  [17, 'Cl'],
  [18, 'Ar'],
  [19, 'K'],
  [20, 'Ca'],
  [21, 'Sc'],
]);

const atomsWeights = new Map([
  [1, '1.008'],
  [2, '4.0026'],
  [3, '6.94'],
  [4, '9.0122'],
  [5, '10.81'],
  [6, '12.011'],
  [7, '14.007'],
  [8, '15.999'],
  [9, '18.998'],
  [10, '20.180'],
  [11, '22.990'],
  [12, '24.305'],
  [13, '26.982'],
  [14, '28.085'],
  [15, '30.974'],
  [16, '32.06'],
  [17, '35.45'],
  [18, '39.948'],
  [19, '39.098'],
  [20, '40.078'],
  [21, '44.956'],
]);


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

const Atom = styled.div`
  height: 6em;
  width: 4.5em;
  padding: 0.25em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  border: 0.5px solid #2c485a5f;

  :hover {
    background-color: #2c485a;
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
  color: #ffffff39;
`;

const atoms = Array.from({ length: 118 }, (_, i) => {
  if (i > 55 && i < 70) {
    return null;
  }

  if (i > 87 && i < 102) {
    return null;
  }

  let extraClass = '';

  switch (i) {
    case 0:
      extraClass = 'row-1-space';
      break;

    case 3:
      extraClass = 'row-2-space';
      break;

    case 11:
      extraClass = 'row-3-space';
      break;

    default:
      break;
  }

  return {
    id: i + 1,
    name: atomsSymbols.get(i + 1),
    weight: atomsWeights.get(i + 1),
    extraClass
  }
}).filter((atom) => atom !== null);

export function Table(props: TableProps) {
  const { ...rest } = props;

  return (
    <TableContainer {...rest}>
      <PeriodicTable>
        {atoms.map((atom) => (
          <Atom className={atom?.extraClass} key={atom?.id}>
            <AtomNumber>{atom?.id}</AtomNumber>
            <AtomSymbol>{atom?.name}</AtomSymbol>
            <AtomWeight>{atom?.weight}</AtomWeight>

          </Atom>
        ))}
      </PeriodicTable>
    </TableContainer>
  );
}

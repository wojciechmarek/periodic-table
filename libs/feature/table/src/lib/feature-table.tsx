import { useCallback } from 'react';
import { Atom, atomGroupToColor } from '@periodic-table/model';
import { Atom as AtomComp, AtomNumber, AtomSymbol, AtomWeight, PeriodicSummary, PeriodicTable, SummaryColorDot, SummaryItem, SummaryText, TableContainer, TableContent } from './feature-table.styled';

/* eslint-disable-next-line */
export interface TableProps {
  [key: string]: any;
  atoms: Atom[];
  handleOnAtomClick: (atom: Atom) => void;
}

export function Table(props: TableProps) {
  const { atoms, handleOnAtomClick, ...rest } = props;

  const generateSpecialClasses = useCallback((id: number) => {
    if (id === 0) return 'row-1-space';
    if (id === 3) return 'row-2-space';
    if (id === 11) return 'row-3-space';
    if (id > 55 && id < 70) return 'no-display';
    if (id > 87 && id < 102) return 'no-display';
  }, []);

  const onAtomClick = useCallback((atom: Atom) => {
    handleOnAtomClick(atom);
  }, [handleOnAtomClick]);

  return (
    <TableContainer {...rest}>
      <TableContent>
        <PeriodicSummary>
          {Array.from({ length: 11 }, (_, i) => i + 1).map((id) => (
            <SummaryItem key={id}>
              <SummaryColorDot color={Array.from(atomGroupToColor.values())[id - 1]} />
              <SummaryText>{Array.from(atomGroupToColor.keys())[id - 1]}</SummaryText>
            </SummaryItem>
          ))}
        </PeriodicSummary>
        <PeriodicTable>
          {atoms?.map((atom, index) => (
            <AtomComp className={generateSpecialClasses(index)} key={atom?.name} onClick={() => onAtomClick(atom)} color={atomGroupToColor.get(atom?.groupBlock)}>
              <AtomNumber>{atom?.atomicNumber}</AtomNumber>
              <AtomSymbol>{atom?.symbol}</AtomSymbol>
              <AtomWeight>{atom?.name}</AtomWeight>
            </AtomComp>
          ))}
        </PeriodicTable>
      </TableContent>
    </TableContainer>
  );
}

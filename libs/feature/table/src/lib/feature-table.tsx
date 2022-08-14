import { useCallback } from 'react';
import { Atom, atomGroupToColor } from '@periodic-table/model';
import { Atom as AtomComp, AtomNumber, AtomSymbol, AtomWeight, LoadingText, PeriodicSummary, PeriodicTable, SummaryColorDot, SummaryItem, SummaryText, TableContainer, TableContent } from './feature-table.styled';

/* eslint-disable-next-line */
export interface TableProps {
  [key: string]: any;
  atoms?: Atom[];
  handleOnAtomClick: (atom: Atom) => void;
}

export function Table(props: TableProps) {
  const { atoms, handleOnAtomClick, ...rest } = props;

  const indexes = Array.from({ length: 119 }, (_, i) => i);
  const extraIndexes = Array.from({ length: 15 }, (_, i) => i);

  const generateClasses = useCallback((id: number) => {
    if (id === 0) return 'row-1-space';
    if (id === 3) return 'row-2-space';
    if (id === 11) return 'row-3-space';
    if (id === 55) return 'empty-cell-after';
    if (id > 55 && id < 71) return 'no-display';
    if (id === 87) return 'empty-cell-after';
    if (id > 87 && id < 103) return 'no-display';
    if (id === 118) return 'whole-row-space';
  }, []);

  const generateExtraClasses = useCallback((id: number) => {
    if (id === 0) return 'extra-atoms-margin-left';
  }, []);

  const onAtomClick = useCallback((atom: Atom) => {
    handleOnAtomClick(atom);
  }, [handleOnAtomClick]);

  return (
    <TableContainer {...rest}>
      <TableContent>
        {!atoms ?
          <LoadingText>
            Loading...
          </LoadingText>
          :
          <>
            <PeriodicSummary>
              {Array.from({ length: 11 }, (_, i) => i + 1).map((id) => (
                <SummaryItem key={id}>
                  <SummaryColorDot color={Array.from(atomGroupToColor.values())[id - 1]} />
                  <SummaryText>{Array.from(atomGroupToColor.keys())[id - 1]}</SummaryText>
                </SummaryItem>
              ))}
            </PeriodicSummary>
            <PeriodicTable>
              {indexes.map((index) => (
                <AtomComp className={generateClasses(index)} key={atoms?.[index]?.name} onClick={() => onAtomClick(atoms?.[index])} color={atomGroupToColor.get(atoms?.[index]?.groupBlock)}>
                  <AtomNumber>{atoms?.[index]?.atomicNumber}</AtomNumber>
                  <AtomSymbol>{atoms?.[index]?.symbol}</AtomSymbol>
                  <AtomWeight>{atoms?.[index]?.name}</AtomWeight>
                </AtomComp>
              ))}
              {extraIndexes.map((index) => (
                <AtomComp className={generateExtraClasses(index)} key={atoms?.[index + 56]?.name} onClick={() => onAtomClick(atoms?.[index + 56])} color={atomGroupToColor.get(atoms?.[index + 56]?.groupBlock)}>
                  <AtomNumber>{atoms?.[index + 56]?.atomicNumber}</AtomNumber>
                  <AtomSymbol>{atoms?.[index + 56]?.symbol}</AtomSymbol>
                  <AtomWeight>{atoms?.[index + 56]?.name}</AtomWeight>
                </AtomComp>
              ))}
              {extraIndexes.map((index) => (
                <AtomComp className={generateExtraClasses(index)} key={atoms?.[index + 88]?.name} onClick={() => onAtomClick(atoms?.[index + 88])} color={atomGroupToColor.get(atoms?.[index + 88]?.groupBlock)}>
                  <AtomNumber>{atoms?.[index + 88]?.atomicNumber}</AtomNumber>
                  <AtomSymbol>{atoms?.[index + 88]?.symbol}</AtomSymbol>
                  <AtomWeight>{atoms?.[index + 88]?.name}</AtomWeight>
                </AtomComp>
              ))}
            </PeriodicTable>
          </>}
      </TableContent>
    </TableContainer>
  );
}

import styled from "@emotion/styled";
import { I } from "vitest/dist/types-198fd1d9";

export const TableContainer = styled.div`
  padding: 1em;
  height: calc(100vh - 3em);
  overflow: auto;
  display: flex;
  justify-content: center;


`;

export const TableContent = styled.div`
  position: relative;
  overflow-y: auto;
  height: fit-content;
`;


export const PeriodicSummary = styled.div`
  position: absolute;
  height: 10em;
  width: 30em;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr;
  top: 1em;
  left: 14.5em;
`;

export const SummaryItem = styled.div`
  width: 100%;
  padding: 0.125em 1em;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const SummaryColorDot = styled.div<{
  color: string;
}>`
  height: 1em;
  width: 1em;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const SummaryText = styled.p`
  color: white;
  font-size: 1rem;
  margin-left: 1em;
  font-weight: bold;
  text-transform: capitalize;
`;

export const PeriodicTable = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: min-content;
`;


export const LoadingText = styled.p`
  color: #ffffff60;
  font-size: 5rem;
  font-weight: bold;
`;

export const Atom = styled.div<{
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
  cursor: pointer;

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

  &.no-display {
    display: none;
  }

  &.whole-row-space {
    grid-column: 1 / span 18;
  }

  &.empty-cell-after {
    grid-column: 2 / span 2;
  }

  &.extra-atoms-margin-left {
    grid-column: 4;
  }
`;

export const AtomNumber = styled.p`
  font-size: 0.75rem;
  width: 70%;
  text-align: end;
`;

export const AtomSymbol = styled.p`
  font-size: 1.5rem;
`;

export const AtomWeight = styled.p`
  font-size: 0.75rem;
  opacity: 0.5;
`;
import styled from "@emotion/styled";

export const TableContainer = styled.div`
  height: 100%;
  padding: 1em;
  overflow: scroll;
`;

export const PeriodicTable = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: min-content;
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
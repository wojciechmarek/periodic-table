import styled from "@emotion/styled";

export const DetailsContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

export const SymbolAndNameRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

export const DescriptionRow = styled.div`
  margin-top: 1em;
  
`;

export const Description = styled.p`
  color: white;
  font-size: 0.75rem;
  text-align: justify;
  text-justify: inter-word;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  padding-right: 1em;
`;

export const AtomSymbol = styled.h2`
  font-size: 5em;
`;

export const AtomFullName = styled.h3`
  font-size: 1.5em;
`;

export const DetailsRow = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.5em;

  &:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const Label = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

export const Value = styled.span`
  color: white;
  font-size: 1rem;
`;

export const CpkColor = styled.div<{
  color: string;
}>`
  height: 1em;
  width: 1em;
  border-radius: 50%;
  background-color: #${({ color }) => color};
`;
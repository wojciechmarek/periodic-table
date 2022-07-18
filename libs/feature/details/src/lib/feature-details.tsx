import { Atom } from '@periodic-table/model';
import { XCircle } from 'lucide-react';
import { AtomFullName, AtomSymbol, CloseButton, CloseButtonRow, Description, DescriptionRow, DetailsContainer, DetailsRow, Label, Row, SymbolAndNameRow, Value } from './feature-details.styled';

/* eslint-disable-next-line */
export interface DetailsProps {
  [key: string]: any;
  atom?: Atom;
  handleOnCloseClick: () => void;
}

export function Details(props: DetailsProps) {
  const { atom, handleOnCloseClick, ...rest } = props;

  const onCloseClick = () => {
    handleOnCloseClick();
  }

  return (
    <DetailsContainer {...rest}>
      <CloseButtonRow>
        <CloseButton onClick={onCloseClick}>
          <XCircle size={24} />
        </CloseButton>
      </CloseButtonRow>
      <SymbolAndNameRow>
        <AtomSymbol>{atom.symbol}</AtomSymbol>
        <AtomFullName>{atom.name}</AtomFullName>
      </SymbolAndNameRow>
      <DescriptionRow>
        <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quidem debitis consequuntur fugiat odit aliquid labore quo, at exercitationem eum molestias, soluta provident, consequatur sit. Minima ea ipsam asperiores dolor.</Description>
      </DescriptionRow>
      <DetailsRow>
        <Row>
          <Label>Number</Label>
          <Value>{atom?.atomicNumber}</Value>
        </Row>
        <Row>
          <Label>Mass</Label>
          <Value>{atom?.atomicMass}</Value>
        </Row>
        <Row>
          <Label>Density</Label>
          <Value>{atom?.density}</Value>
        </Row>
        <Row>
          <Label>Melting point</Label>
          <Value>{atom?.meltingPoint} K</Value>
        </Row>
        <Row>
          <Label>Standard state</Label>
          <Value>{atom?.standardState}</Value>
        </Row>
      </DetailsRow>
    </DetailsContainer>
  );
}

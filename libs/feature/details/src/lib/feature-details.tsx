import { Atom } from '@periodic-table/model';
import { XCircle } from 'lucide-react';
import { AtomFullName, AtomSymbol, CloseButton, CloseButtonRow, CpkColor, Description, DescriptionRow, DetailsContainer, DetailsRow, Label, ReadMoreLink, Row, SymbolAndNameRow, Value } from './feature-details.styled';

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
        <AtomSymbol>{atom?.symbol}</AtomSymbol>
        <AtomFullName>{atom?.name}</AtomFullName>
      </SymbolAndNameRow>
      <DescriptionRow>
        <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quidem debitis consequuntur fugiat odit aliquid labore quo, at exercitationem eum molestias, soluta provident, consequatur sit. Minima ea ipsam asperiores dolor.</Description>
        <ReadMoreLink href={`https://en.wikipedia.org/wiki/${atom?.name}`} target="_blank">Read more</ReadMoreLink>
      </DescriptionRow>
      <DetailsRow>
        <Row>
          <Label>Atomic number</Label>
          <Value>{atom?.atomicNumber}</Value>
        </Row>
        <Row>
          <Label>Mass</Label>
          <Value>{atom?.atomicMass} ma</Value>
        </Row>
        <Row>
          <Label>Density</Label>
          <Value>{atom?.density} kg/m³</Value>
        </Row>
        <Row>
          <Label>Group</Label>
          <Value>{atom?.groupBlock}</Value>
        </Row>
        <Row>
          <Label>Standard state</Label>
          <Value>{atom?.standardState}</Value>
        </Row>
        <Row>
          <Label>Melting point</Label>
          <Value>{Number.parseFloat(atom?.meltingPoint ?? "") - 273.15} °C</Value>
        </Row>
        <Row>
          <Label>Boiling point</Label>
          <Value>{Number.parseFloat(atom?.boilingPoint ?? "") - 273.15} °C</Value>
        </Row>
        <Row>
          <Label>Electronic configuration</Label>
          <Value>{atom?.electronicConfiguration}</Value>
        </Row>
        <Row>
          <Label>Atomic radius</Label>
          <Value>{atom?.atomicRadius}</Value>
        </Row>
        <Row>
          <Label>Bonding type</Label>
          <Value>{atom?.bondingType}</Value>
        </Row>
        <Row>
          <Label>Electron affinity</Label>
          <Value>{atom?.electronAffinity}</Value>
        </Row>
        <Row>
          <Label>Ion radius</Label>
          <Value>{atom?.ionRadius}</Value>
        </Row>
        <Row>
          <Label>CPK (Corey–Pauling–Koltun) color</Label>
          <CpkColor color={atom?.cpkHexColor ?? "000"} />
        </Row>
        <Row>
          <Label>Year discovered</Label>
          <Value>{atom?.yearDiscovered}</Value>
        </Row>

      </DetailsRow>
    </DetailsContainer>
  );
}

import styled from '@emotion/styled';
import { Search as SearchIcon, Info as InfoIcon } from 'lucide-react';

/* eslint-disable-next-line */
export interface SearchBarProps { }

const SearchBarContainer = styled.div`
  height: 3em;
  width: 100%;
  background-color: #26323A;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0 1em;
`;

const Title = styled.h1`
  color: white;
  font-size: 1.25rem;
`;

const Search = styled.div`
  height: 2em;
  width: 25em;
  background-color: #2D3940;
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  gap: 0.5em;
`;


const Info = styled.div`
  width: 10em;
  background-color: #26323A;
  display: flex;
  justify-content: end;
  color: #fff;
`;

export function SearchBar(props: SearchBarProps) {
  return (
    <SearchBarContainer>
      <Title>The periodic table</Title>
      <Search>
        <span
          role='img'
          aria-label='search'
        >
          <SearchIcon size={16} />
        </span>
        <p>Search...</p>
      </Search>
      <Info>
        <span
          role='img'
          aria-label='info'
        ><InfoIcon size={16} /></span>
      </Info>
    </SearchBarContainer>
  );
}

import styled from '@emotion/styled';
import { Search as SearchIcon, Info as InfoIcon, Github } from 'lucide-react';

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

const TitleLink = styled.a`
  text-decoration: none;
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

  :hover {
    cursor: pointer;
    background-color: #313e46;
  }
`;

const GithubLinkContainer = styled.div`
  width: 10em;
`;

const GithubLink = styled.a`
  color: white;
  text-decoration: none;
`;

export function SearchBar(props: SearchBarProps) {
  return (
    <SearchBarContainer>
      <TitleLink href='/'>
        <Title>The periodic table</Title>
      </TitleLink>
      <Search onClick={() => console.log('search clicked')}>
        <span
          role='img'
          aria-label='search'
        >
          <SearchIcon size={16} />
        </span>
        <p>Search...</p>
      </Search>
      <GithubLinkContainer>
        <GithubLink href='https://github.com/wojciechmarek/periodic-table#readme' target='_blank'>
          <Github size={20} />
        </GithubLink>

      </GithubLinkContainer>

    </SearchBarContainer>
  );
}

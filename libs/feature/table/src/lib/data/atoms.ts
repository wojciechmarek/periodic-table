interface Atom {
  id: number;
  name: string;
  symbol: string;
  weight: number;
  group: string;
  period: number;
  block: string;
  state: string;
  color: string;
}

export const atoms = new Map<number, Atom>([
  [
    1,
    {
      id: 1,
      name: 'Hydrogen',
      symbol: 'H',
      weight: 1.00794,
      group: 'nonmetal',
      period: 1,
      block: 's',
      state: 'gas',
      color: '#E3EADE',
    },
  ],
  [
    2,
    {
      id: 2,
      name: 'Helium',
      symbol: 'He',
      weight: 4.002602,
      group: 'noble gas',
      period: 1,
      block: 's',
      state: 'gas',
      color: '#9F74CF',
    },
  ],
  [
    3,
    {
      id: 3,
      name: 'Lithium',
      symbol: 'Li',
      weight: 6.941,
      group: 'alkali metal',
      period: 2,
      block: 's',
      state: 'solid',
      color: '#F9C80E',
    },
  ],
  [
    4,
    {
      id: 4,
      name: 'Beryllium',
      symbol: 'Be',
      weight: 9.012182,
      group: 'alkaline earth metal',
      period: 2,
      block: 's',
      state: 'solid',
      color: '#F08A5D',
    },
  ],
  [
    5,
    {
      id: 5,
      name: 'Boron',
      symbol: 'B',
      weight: 10.811,
      group: 'metalloid',
      period: 2,
      block: 'p',
      state: 'solid',
      color: '#F67280',
    },
  ],
]);

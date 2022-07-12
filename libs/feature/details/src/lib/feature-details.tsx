import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DetailsProps {
  [key: string]: any;
}

const DetailsContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #2c485a;
`;

export function Details(props: DetailsProps) {
  const { ...rest } = props;
  return (
    <DetailsContainer {...rest}>
      <h1>Welcome to Details!</h1>
    </DetailsContainer>
  );
}

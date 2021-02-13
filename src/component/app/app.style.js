import { Router } from '@reach/router'
import styled from 'styled-components'


export const StyledRouter = styled(Router)`
  grid-column: 1/-1;
  grid-row: 1/-1;
  margin: 1rem;

  @media only screen and (min-width: 768px) {
    grid-column: 2/11;
    grid-row: 2/11;
  }
  @media only screen and (min-width: 992px) {
    grid-column: 3/11;
    grid-row: 2/-2;
  }
`

export const StyledAppWarrper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
`

import styled from 'styled-components'

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

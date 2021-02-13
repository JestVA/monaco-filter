import { Link, Paper } from '@material-ui/core'
import styled from 'styled-components'
// import { Link } from '@reach/router'


export const StyledTitle = styled.div`
  color: #cbcbcb;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 24px;
  text-align: center;
`

export const StyledTopics = styled.div`
  line-height: 28px;
  font-size: 18px;
  color: #cbcbcb;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:nth-last-child(1) {
    margin-bottom: 4rem;
  }
`

export const StyledPaper = styled(Paper)`
  width: 100;
  grid-column: 2/4;
  grid-row: 2/4;
  overflow: hidden;
  padding: 2rem;
  /* display: flex; */


  @media only screen and (min-width: 768px) {
    grid-column: 2/8;
    grid-row: 2/8;
  }
  @media only screen and (min-width: 992px) {
    grid-column: 4/10;
    grid-row: 4/10;
  }

  && {
    background-color: rgba(78,122,131,0.46);
  }
`

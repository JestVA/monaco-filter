import { Paper } from '@material-ui/core'
import styled from 'styled-components'



export const StyledTitle = styled.div`
  color: #cbcbcb;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 24px;
  text-align: center;
`

export const StyledPaper = styled(Paper)`
  height: 100%;
  overflow: hidden;
  padding: 2rem;

  && {
    background-color: rgba(78,122,131,0.46);
  }
`

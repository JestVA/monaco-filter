import { Paper } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from '@reach/router'


export const StyledTopics = styled(Link)`
  display: flex;
  flex-direction: row;
  line-height: 28px;
  font-size: 18px;
  text-decoration: none;
  color: #cbcbcb;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:nth-last-child(1) {
    margin-bottom: 4rem;
  }
`


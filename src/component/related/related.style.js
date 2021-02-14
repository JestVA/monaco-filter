import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from '@reach/router'

export const StyledCircle = styled(Link)`
  background-color: rgba(203,203,203,0.44);
  border-radius: 50%;
  width: 68px;
  height: 68px;
  position: absolute;
  top: 796px;
  right: 1117px;

  :hover {
    box-shadow: 5px 5px 25px 2px #cbcbcb;
  }
`

export const StyledBackArrow = styled(ArrowBackIosIcon)`
  color: #cbcbcb;
  position: relative;
  top: 22px;
  left: 25px;
  
  :hover {
    color: #fff;
  }
`

import { Paper } from '@material-ui/core'
import styled from 'styled-components'


export const StyledSummary = styled.div`
  font-weight: bold;
  color: #fff;
`

export const StyledParagraphs = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #cbcbcb;
`

export const StyledTags = styled.span`
  font-size: 12px;
  color: #cbcbcb;
  background-color: #A00644;
  padding: 2px 6px;
  margin: 5px;
  border-radius: 8px;
`

export const StyledTopicsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StyledTopics = styled.div`
  /* line-height: 20px; */
  background-color: ${({selected}) => selected ? '#90A006' : '#A00644'};
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  padding: 4px;
  font-size: 12px;
  align-self: start;
  color: ${({selected}) => selected ? '000' : '#fff'};
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:nth-last-child(1) {
    margin-bottom: 4rem;
  }

`
export const StyledPaper = styled(Paper)`
  height: 100%;
  overflow: hidden;
  padding: 2rem;
  margin: 2rem;

  && {
    max-height: 150px;
    background-color: rgba(78,122,131,0.46);
  }
`
export const StyledParagraphPaper = styled(Paper)`
  height: 100%;
  overflow: hidden;
  padding: 2rem;
  margin: 2rem;

  && {
    background-color: rgba(78,122,131,0.46);
  }
`

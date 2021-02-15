import React, { useEffect, useState } from 'react'

import { Scrollbar } from "react-scrollbars-custom"
import * as ST from './topics.style'
import * as SR from '../reusable/reusable.style'
import { useDispatch, useSelector } from 'react-redux'
import { getMonacoDataAction, setSelectedAction } from '../../store/monaco.actions'

const Topics = () => {
  const dispatch = useDispatch()
  const [topics, paragraphs] = useSelector(({ monaco }) => [
    monaco.topics,
    monaco.paragraphs
  ])

  useEffect(
    () => {
      dispatch(getMonacoDataAction())
    },
    []
  )

  const topicsFilter = topics.list
    .filter(({ selected }) => selected)
    .map(x => x.id)


  const newParagraphs = paragraphs.list
    .map(p => ({
      ...p,
      tagsMatched: p.topics.filter(tag => topicsFilter.includes(tag))
    }))
    .sort((a, b) => b.tagsMatched.length - a.tagsMatched.length)

  const handleSelected = id => {
    dispatch(setSelectedAction(id))
  }

  console.log(newParagraphs.filter(x => x.tagsMatched.length))
  return (
    <div>
      <SR.StyledTitle>Select a Topic of Interest</SR.StyledTitle>
      <ST.StyledPaper elevation={3}>
        <ST.StyledTopicsWrap>
          {topics.list
          .filter(x => x?.questionText)
          .map(({ questionText, id, selected }, key) => (
            <ST.StyledTopics
            selected={selected}
            onClick={() => handleSelected(id)}
            key={key}
            >{questionText}
            </ST.StyledTopics>
          ))}
        </ST.StyledTopicsWrap>
      </ST.StyledPaper>
      <ST.StyledParagraphPaper>
        <Scrollbar style={{minHeight: "300px"}}>
          {newParagraphs
            .filter(x => x.tagsMatched.length)
            .map(({ summary, textFirstPerson, textThirdPerson, tagsMatched = []}, key) => (
                <ST.StyledParagraphs>
                  <ST.StyledSummary>{summary}</ST.StyledSummary>
                  <div>P1: {textFirstPerson}</div>
                  {textThirdPerson && <div>P3: {textThirdPerson}</div>}
                  {tagsMatched.map(x => (
                    <ST.StyledTags>
                      {x}
                    </ST.StyledTags>
                  ))}
                </ST.StyledParagraphs>
            ))
          }
        </Scrollbar>
      </ST.StyledParagraphPaper>
    </div>
  )
}

export { Topics }

import React, { useEffect, useState } from 'react'
import { get } from 'axios'

import { Scrollbar } from "react-scrollbars-custom"
import * as ST from './topics.style'
import * as SR from '../reusable/reusable.style'

const Topics = () => {
  const [topics, setTopics] = useState([])

  useEffect(
    () => {
      try {
        const getResult = async() => {
          const result = await get ('https://raw.githubusercontent.com/monaco-digital/ms-backend-mock/master/data/topics.json')
          setTopics(result.data)
          console.log(result, 'topics')
        }
        getResult()
        } catch (error) {
          console.log('Error:', error)
      }
    },
  []
  )

  return (
    <SR.StyledPaper path="/" elevation={3}>
      <SR.StyledTitle>Select a Topic of Interest</SR.StyledTitle>
      <Scrollbar>
        {topics.map(({ questionText }, key) => (
          <ST.StyledTopics
            to="related"
            key={key}
          >{questionText}</ST.StyledTopics>
        ))}
      </Scrollbar>
    </SR.StyledPaper>
  )
}

export { Topics }

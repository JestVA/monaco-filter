import React, { useEffect, useState } from 'react'
import { get } from 'axios'

import { Scrollbar } from "react-scrollbars-custom"
import * as ST from './topics.style'

const Topics = () => {
  const [topics, setTopics] = useState([])

  useEffect(
    () => {
      try {
        const getResult = async() => {
          const result = await get ('https://raw.githubusercontent.com/monaco-digital/ms-backend-mock/master/data/topics.json')
          console.log(result)
          setTopics(result.data)
        }
        getResult()
        } catch (error) {
          console.log('Error:', error)
      }
    },
  []
  )

  return (
    <ST.StyledPaper elevation={3}>
      <ST.StyledTitle>Select a Topic of Interest</ST.StyledTitle>
      <Scrollbar>
        {topics.map(({ questionText }) => (
          <ST.StyledTopics>{questionText}</ST.StyledTopics>
        ))}
      </Scrollbar>
    </ST.StyledPaper>
  )
}

export { Topics }

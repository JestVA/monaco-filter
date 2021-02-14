import React, { useEffect, useState } from 'react'
import { get } from 'axios'

import * as SRL from './related.style'
import * as SR from '../reusable/reusable.style'
import Scrollbar from 'react-scrollbars-custom'
import { navigate } from '@reach/router'


const Related = () => {
  const [related, setRelated] = useState([])

  useEffect(
    () => {
      try {
        const getResult = async() => {
          const result = await get('https://raw.githubusercontent.com/monaco-digital/ms-backend-mock/master/data/paragraphs.json')
          setRelated(result.data)
          console.log(result, 'paragraphs')
        }
        getResult()
      } catch (error) {
        console.log('Error:', error)
      }
    },
    []
  )

// summary: "I resigned because of their discrimination."
// textFirstPerson: "I refer to my recent resignation due to [insert protected characteristic] discrimination. "
// textThirdPerson: "I 

  return (
    <>
      <SR.StyledPaper>
        <Scrollbar>
          <SR.StyledTitle>Related to Selected Topic</SR.StyledTitle>
          {related.map(({ status, summary, textFirstPerson, textThirdPerson }, key) => (
            <div key={key}>
              <span>{status}</span>
              <h1>{summary}</h1>
              <div>{textFirstPerson}</div>
              <div>{textThirdPerson}</div>
            </div>
          ))}
        </Scrollbar>
      </SR.StyledPaper>
      <SRL.StyledCircle
        to="/"
      ><SRL.StyledBackArrow/>
      </SRL.StyledCircle>
    </>
  )
}

export { Related }

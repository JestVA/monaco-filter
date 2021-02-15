import React, { useEffect, useState } from 'react'
import { get } from 'axios'

import * as SRL from './terms-and-conditions.style'
import * as SR from '../reusable/reusable.style'
import Scrollbar from 'react-scrollbars-custom'
// import { navigate } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import { getMonacoDataAction } from '../../store/monaco.actions'


const Terms = () => {
  const paragraphs = useSelector(({ monaco }) => monaco.paragraphs)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getMonacoDataAction())
      console.log(paragraphs.list)
    },
    []
  )


  return (
    <>
      <SR.StyledPaper>
        <Scrollbar>
          <SR.StyledTitle>Terms and Conditions</SR.StyledTitle>
            <div>A Terms and Conditions agreement is not legally required. However, having one comes with a number of important benefits for both you and your users/customers.

The benefits include increasing your control over your business/platform, while helping your users understand your rules, requirements and restrictions.</div>
        </Scrollbar>
      </SR.StyledPaper>
      <SRL.StyledCircle
        to="/terms-and-conditions"
      ><SRL.StyledBackArrow/>
      </SRL.StyledCircle>
    </>
  )
}

export { Terms }

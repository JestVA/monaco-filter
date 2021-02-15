import * as constant from './monaco.constant'
import { get } from 'axios'


export const setSelectedAction = id => ({
  type: constant.SET_SELECTED,
  id
})

export const setMonacoDataListAction = (which, list) => ({
  type: constant.SET_MONACO_DATA_LIST,
  which,
  list
})

export const getMonacoDataAction = () => {
  const header = {
    'Access-Control-Allow-Origin': '*'
  }
  return dispatch => {
    try {
      const getResult = async(which) => {
        dispatch({type: constant.GET_MONACO_DATA, which})
        // const result = await get(`http://localhost:3000/topics`, header
        const result = await get(`http://localhost:3000/${which}`, header)
        dispatch(setMonacoDataListAction(which, result.data))
        // console.log(result.data, which)
      }
      ['topics', 'paragraphs'].forEach(getResult)
    } catch (error) {
      console.log('Error:', error)
    } 
  }
}

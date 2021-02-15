import * as constant from './monaco.constant'

export const initialState = {
  topics: {list: [], isLoading: false},
  paragraphs: {list: [], isLoading: false}
}

export const monacoReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.SET_SELECTED:
      return {
        ...state,
        topics: {
          ...state.topics,
          list: state.topics.list.map(t => ({
            ...t,
            selected: t.id === action.id && t.selected
              ? false
              : t.id === action.id && !t.selected
                ? true
                : !!t.selected
          }))
        }
      }
    case constant.GET_MONACO_DATA:
      return {
        ...state,
        [action.which]: {
          list: [],
          isLoading: true,
        }
      }
    case constant.SET_MONACO_DATA_LIST:
      return {
        ...state,
        [action.which]: {
          list: action.list,
          isLoading: false,
        }
      }
    default:
      return state
  }
}


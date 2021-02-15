import { initialState, monacoReducer } from '../store/monaco.reducer'
import * as constant from '../store/monaco.constant'

const fetchMock = {
  which: "which",
  list: [],
  isLoading: false,
}

describe("Monaco reducer", () => {
  it("should handle SET_SELECTED", () => {
    const action = {
      type: constant.SET_SELECTED,
      id: 'M'
    }

    const startState = {
      topics: {
        list: [
          {id: 'M', selected: false},
          {id: 'N', selected: false},
          {id: 'Rd', selected: false},
        ], 
        isLoading: false
      },
      paragraphs: {list: [], isLoading: false}
    }

    const expected = {
      topics: {
        list: [
          {id: 'M', selected: true},
          {id: 'N', selected: false},
          {id: 'Rd', selected: false},
        ], 
        isLoading: false
      },
      paragraphs: {list: [], isLoading: false}
    }

    expect(monacoReducer(startState, action)).toEqual(expected)
  })
  it("should handle GET_MONACO_DATA", () => {
    expect(monacoReducer(initialState, {
      type: constant.GET_MONACO_DATA,
      which : fetchMock.which,
      list : fetchMock.list,
      isLoading: fetchMock.isLoading
    })).toEqual({
      ...initialState,
      which: {
        list: [],
        isLoading: true
      }
    })
  })
})

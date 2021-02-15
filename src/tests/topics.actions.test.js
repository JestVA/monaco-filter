import * as constant from '../store/monaco.constant'
import * as action from '../store/monaco.actions'


const data = {
  which: "which",
  list: "list",
}

const id = "id"

describe("Testing all the monaco actions", () => {
  it("should create an action to set the selected topic", () => {
    expect(action.setSelectedAction(id)).toEqual({
      type: constant.SET_SELECTED,
      id
    })
  })
  it("should create an action to set data list", () => {
    expect(action.setMonacoDataListAction(data.which, data.list)).toEqual({
      type: constant.SET_MONACO_DATA_LIST,
      which: data.which,
      list: data.list
    })
  })
  it("should get monaco data", () => {
    expect(action)
  })
})


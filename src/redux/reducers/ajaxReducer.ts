const initialState = {
  people: [],
}

type ActionType = {
  type: string
  payload: any
}

const ajaxReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    default:
      return state
  }
}

export default ajaxReducer

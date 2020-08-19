const INITIAL_STATE = {
  searchText: 'でふぉると'
}

const reducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    case "SET_SEARCH_TEXT":
      return {...state, searchText:action.searchText}

    default:
      return state;
  }
}

export default reducer

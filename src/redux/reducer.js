const INITIAL_STATE = {
  badgeNumber:0,
  searchText: 'でふぉると'
}

const reducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    case "SET_BADGE_NUMBER":
      return {...state, badgeNumber:action.badgeNumber}

    case "SET_SEARCH_TEXT":
      return {...state, searchText:action.searchText}

    default:
      return state;
  }
}

export default reducer

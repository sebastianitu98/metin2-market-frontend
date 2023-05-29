import React, {createContext, useContext, useReducer} from 'react'

const alchemyVisibility = {
  rubyVisible: false,
  diamondVisible: false,
  onyxVisible: false,
  granateVisible: false,
  jadeVisible: false,
  saphireVisible: false,
}
const AlchemyContext = createContext(alchemyVisibility)

export function useAlchemyContext(){
  return useContext(AlchemyContext)
}

function reducer(state, action) {
  switch(action.type) {
    case 'ruby':
      return state.rubyVisible ?
        {rubyVisible: false, diamondVisible: false, onyxVisible: false, granateVisible: false, jadeVisible: false, saphireVisible: false}
        :
        {rubyVisible: true, diamondVisible: false, onyxVisible: false, granateVisible: false, jadeVisible: false, saphireVisible: false};

    case 'diamond':
      return state.diamondVisible ? 
        {rubyVisible: false, diamondVisible: false, onyxVisible: false, granateVisible: false, jadeVisible: false, saphireVisible: false}
        :
        {rubyVisible: false, diamondVisible: true, onyxVisible: false, granateVisible: false, jadeVisible: false, saphireVisible: false};

    case 'onyx':
      return state.onyxVisible ?
        {rubyVisible: false, diamondVisible: false, onyxVisible: false, granateVisible: false, jadeVisible: false, saphireVisible: false}
        :
        {rubyVisible: false, diamondVisible: false, onyxVisible: true, granateVisible: false, jadeVisible: false, saphireVisible: false};

    case 'granate':
      return state.granateVisible ?
        {rubyVisible: false, diamondVisible: false, onyxVisible: false, granateVisible: false, jadeVisible: false, saphireVisible: false}
        :
        {rubyVisible: false, diamondVisible: false, onyxVisible: false, granateVisible: true, jadeVisible: false, saphireVisible: false};

    case 'jade':
      return state.jadeVisible ?
        {rubyVisible: false, diamondVisible: false, onyxVisible: false, granateVisible: false, jadeVisible: false, saphireVisible: false}
        :
        {rubyVisible: false, diamondVisible: false, onyxVisible: false, granateVisible: false, jadeVisible: true, saphireVisible: false};

    case 'saphire':
      return state.saphireVisible ?
      {rubyVisible: false, diamondVisible: false, onyxVisible: false, granateVisible: false, jadeVisible: false, saphireVisible: false}
      :
      {rubyVisible: false, diamondVisible: false, onyxVisible: false, granateVisible: false, jadeVisible: false, saphireVisible: true};
    default:
      return state
  }
}

export function AlchemyContextProvider({children}) {

    const [ alchemyState , dispatch ] = useReducer(reducer, alchemyVisibility)

  return (
    <AlchemyContext.Provider value={{alchemyState, dispatch}}>
      {children}
    </AlchemyContext.Provider>
  )
}


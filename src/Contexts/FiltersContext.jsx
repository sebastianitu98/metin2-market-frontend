import React, {createContext, useContext, useState} from 'react'

const AlchemyContext = createContext()

export function useAlchemyContext(){
    return useContext(AlchemyContext)
}

export function AlchemyContextProvider({children}) {

    const [ visiblePiece , setVisiblePiece ] = useState({
        rubyVisible: false,
        diamondVisible: false,
        onyxVisible: false,
        granateVisible: false,
        jadeVisible: false,
        saphireVisible: false,
    })

  return (
    <FilterContext.Provider value={filters}>
        {children}
    </FilterContext.Provider>
  )
}

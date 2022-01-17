import React, {Fragment} from 'react'

export const checkPropertyType = (types: any) => {
    if(Array.isArray(types)) {
      return(
        <Fragment>
          <select>
            {types.map((type: React.ReactNode, index: number) => {
              return(
                <option key={index}>{type}</option>
                )
            })}
          </select>
        </Fragment>
      )
    } else {
      return types
    }
  }
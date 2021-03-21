import React, { useState } from 'react'
import CodeFilter from '../_components/CodeFilter'
import CodeList from '../_components/CodeList'

function PromoCodeWrapper() {
  const [searchString, setSearchString] = useState("")

  return (
    <>
      <CodeFilter
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <CodeList
        searchString = {searchString}
      />
    </>
  )
}

export default PromoCodeWrapper
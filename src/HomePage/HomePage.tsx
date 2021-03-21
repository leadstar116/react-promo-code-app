import React, { useState } from 'react'
import TopHeader from '../_components/Settings'
import UserList from '../_components/UserList'

function HomePage() {
    const [searchString, setSearchString] = useState("")

    return (
        <>
            <TopHeader />
            <UserList
                searchString = {searchString}
            />
        </>
    )
}

export default HomePage
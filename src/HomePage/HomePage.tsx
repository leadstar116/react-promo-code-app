import React from 'react'
import PromoCodeWrapper from '../_components/PromoCodeWrapper'
import TopHeader from '../_components/TopHeader'

function HomePage() {

    return (
        <>
            <TopHeader />
            <div className="main-wrapper">
                <h1 className="page-title">Services</h1>
                <PromoCodeWrapper />
            </div>
        </>
    )
}

export default HomePage
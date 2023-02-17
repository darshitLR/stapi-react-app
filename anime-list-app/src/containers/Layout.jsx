import React from 'react'
import Content from '../routers/Content'
import Header from './Header'

function Layout() {
    return (
        <div>
            <Header />
            <div >
                <Content />
            </div>
        </div>
    )
}

export default Layout
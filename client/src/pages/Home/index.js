import React from 'react'
import Sidebar from '../../component/Sidebar'
import TopBar from '../../component/TopBar'
import Feed from '../../component/Feed'
import RightSidebar from '../../component/RightSidebar'

import './Home.css'

const Home = () => {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <RightSidebar />
            </div>
        </>
    )
}

export default Home

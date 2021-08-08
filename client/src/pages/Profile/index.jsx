import React from 'react'
import RightSidebar from '../../component/RightSidebar'
import Sidebar from '../../component/Sidebar'
import TopBar from '../../component/TopBar'
import Feed from '../../component/Feed'


import './Profile.css'

const Profile = () => {
    return (
        <>
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" className="profileCoverImg" />
                            <img src="https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName"> Jhon Doe</h4>
                            <span className="profileInfoDesc">HeY! I am there for you.</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightSidebar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile

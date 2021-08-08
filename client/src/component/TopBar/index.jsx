import React from 'react'
import './TopBar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

const TopBar = () =>{
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <span className="logo">LamaSocial</span>
            </div>
            <div className="topBarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friend, post or video" type="text" className="searchInput" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">HomePage</span>
                    <span className="topBarLink">Timeline</span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        <Person />
                        <span className="topBarIconBadge">1</span>
                    </div>
                    <div className="topBarIconItem">
                        <Chat />
                        <span className="topBarIconBadge">3</span>
                    </div>
                    <div className="topBarIconItem">
                        <Notifications />
                        <span className="topBarIconBadge">8</span>
                    </div>
                </div>
                <img src="https://www.best4geeks.com/wp-content/uploads/2018/08/49-cute-stylish-profile-picture.jpg" alt="" className="topBarImage" />
            </div>
        </div>
    )
}

export default TopBar
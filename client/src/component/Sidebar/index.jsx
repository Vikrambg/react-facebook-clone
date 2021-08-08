import React from 'react'
import './Sidebar.css'
import { Event, HelpOutline, RssFeed, School, WorkOutline,   } from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Sarah Jhon</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jhon Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar

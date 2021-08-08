import React from 'react'
import Share from '../Share'
import Post from '../Post'

import './Feed.css'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Feed

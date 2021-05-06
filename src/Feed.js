import React from 'react'
import './Feed.css';
import StoryLine from './StoryLine';
import MessagePost from './MessagePost'

function Feed() {
    return (
        <div className="feed">
            <StoryLine />
            <MessagePost />
        </div>
    )
}

export default Feed

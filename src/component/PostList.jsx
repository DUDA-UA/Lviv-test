import React from 'react'
import PostItem from './PostItem'
import '../index.css'

export default function PostList({posts,title,removePost}) {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center'}}>
            <h2 style={{marginTop: '20px'}}>{title}</h2>
            <PostItem removePost={removePost}  posts={posts}/>
        </div>
    )
}

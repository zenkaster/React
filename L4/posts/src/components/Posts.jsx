import React from 'react'

export default function Posts({ postsArr, setPostsArr }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '80%', gap:'20px' }}>
            {postsArr.map(post =>
                <div  key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    )
}

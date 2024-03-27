import React from 'react'

export default function PostItem({ post }) {
    return (
        <div>
            <h1>{post.id} - {post.title}</h1>
            <p>{post.body}</p>
        </div>)
}

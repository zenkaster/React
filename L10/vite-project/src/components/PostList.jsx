import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

export default function PostList({ posts, setPosts }) {

    const [onePost, setOnePost] = useState(null);

    // let onePostItem;
    // useEffect(() => {
    //     onePostItem = posts.find(post => post.id == onePost)
    // }, [onePost])

    return (
        <div>
            {posts.map(post => {
                if (onePost == null) {
                    return <PostItem posts={posts} key={post.id} post={post} setPosts={setPosts} setOnePost={setOnePost} />
                } else if (onePost != null && post.id == onePost) {
                    return <PostItem posts={posts} key={post.id} onePost={onePost} post={post} setPosts={setPosts} setOnePost={setOnePost} />
                }
            }
            )}
        </div>
    )
}

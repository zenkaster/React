import React, { useState } from 'react'

export default function PostItem({ posts, post, setPosts, setOnePost, onePost }) {

    const [inputValue, setInputValue] = useState('');
    const [changeTitle, setChangeTitle] = useState(false)
    const [changeBody, setChangeBody] = useState(false)

    const newTitle = () => {
        const tempPosts = posts.map(item => {
            if (item.id == post.id) {
                // item.title = newTitle
                // return item
                return { ...item, title: inputValue }
            } else {
                return item
            }
        })
        setPosts(tempPosts)
        setInputValue('')
        setChangeTitle(false)
    }
    const newBody = () => {
        const tempPosts = posts.map(item => {
            if (item.id == post.id) {
                return { ...item, body: inputValue }
            } else {
                return item
            }
        })
        setPosts(tempPosts)
        setInputValue('')
        setChangeBody(false)

    }

    return (
        <div onClick={() => setOnePost(post.id)} >
            {!!onePost &&
                <button onClick={(e) => { e.stopPropagation(); setOnePost(null) }}>Назад</button>
            }

            {!changeTitle ?
                <h1>{post.title}</h1> :
                <textarea type="text" onChange={(e) => setInputValue(e.target.value)} />
            }
            {!!onePost &&
                <button onClick={(e) => { e.stopPropagation(); !changeTitle ? setChangeTitle(true) : newTitle() }}>{!changeTitle ? 'Изменить заголовок' : 'Сохранить'}</button>
            }

            {!changeBody ?
                <h4>{post.body}</h4> :
                <textarea type="text" onChange={(e) => setInputValue(e.target.value)} />
            }
            {!!onePost &&
                <button onClick={(e) => { e.stopPropagation(); !changeBody ? setChangeBody(true) : newBody() }}>{!changeBody ? 'Изменить описание' : 'Сохранить'}</button>
            }
            <br />
        </div >
    )
}

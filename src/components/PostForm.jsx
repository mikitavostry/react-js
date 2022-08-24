import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = (props) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    props.create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type='text'
        placeholder='Post titile' />
      <MyInput
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type='text'
        placeholder='Post description' />
      <MyButton onClick={addNewPost}> Create </MyButton>
    </form>
  )
}

export default PostForm
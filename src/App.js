
import React, { useState, useRef, useMemo } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ga', body: 'baa' },
    { id: 2, title: 'ac1', body: 'hbb' },
    { id: 3, title: 'bnv2', body: 'acc' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: 15 }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {
        sortedAndSearchedPosts.length !== 0
          ?
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts List 1'} />
          :
          <h1 style={{ textAlign: 'center' }}>Posts weren't found</h1>
      }

    </div >
  )
}

export default App;

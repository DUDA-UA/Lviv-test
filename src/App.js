import React, { useMemo, useState } from 'react';
import PostList from './component/PostList';
import PostForm from './component/PostForm';
import './index.css';
import PostFilter from './component/PostFilter';

import Apple from './img/apple.png';
import Lemon from './img/lemon.png';
import Orange from './img/orange.png'

function App() {

  const [posts,setPosts] = useState([
    {
      "id": 1,
      "imageUrl": Apple,
      "name": "Apple",
      "count": 4,
      "width": 200,
      "height": 200,
      "weight": "200g",
      "comments": ["Good Apple"]
      },
      {
          "id": 2,
          "imageUrl": Orange,
          "name": "Orange",
          "count": 2,
          "width": 100,
          "height": 100,
          "weight": "300g",
          "comments": ["Good Orange"]
      },
      {
          "id": 3,
          "imageUrl": Lemon,
          "name": "Lemon",
          "count": 1,
          "width": 150,
          "height": 150,
          "weight": "100g",
          "comments": "Good Lemon"
      }
  ])

  const[filter,setFilter] = useState({sort: '', query: ''})
  const[visible,setVisible] = useState(false)

  const sortedPost = useMemo(()=>{
    if(filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]));
    } 
    return posts;
  },[filter.sort,posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPost.filter(post => post.name.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query,sortedPost])

  const createPost = (newPost) =>{
    setPosts([...posts,newPost])
  }

  const[options,setOptions] = useState([
    {name: 'for name', value: 'name', id: 1},
    {name: 'for count', value: 'count', id: 2}
  ]) 

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const showPopUp = () =>{
    setVisible(prev => !prev)
  }

  const closeWindow = () =>{
    setVisible(prev => !prev)
  }

  return (
    <div className="App" style={{padding: '30px 10px'}}>
      {visible === false ? '' : <PostForm createPost={createPost} closeWindow={closeWindow}/>}
      <PostFilter filter={filter} setFilter={setFilter} options={options}/>
      {sortedAndSearchedPosts.length !== 0 ? <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Product List'/> : <p className='noPosts'>No more products</p>}
      <button className='btn btn-info btnAdd' onClick={showPopUp}>Add product</button>
    </div>
  );
}

export default App;

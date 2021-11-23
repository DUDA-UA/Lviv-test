import React, {useState} from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({createPost,closeWindow}) {
    const [post,setPost] = useState({name: '', count: '',width: '', height: '', weight: ''});

    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post,id: Date.now()
        }
        if(post.name === '' || post.count === ''|| post.width === '' || post.height === '' || post.weight === ''){
          return false
        }
        else{
          createPost(newPost)
        }
        setPost({name: '', count: '',width: '', height: '', weight: ''})
        closeWindow()
      }
    return (
      <div className="formBox">
          <form className='postForm'>
            <MyInput value={post.name} onChange={e => setPost({...post,name:e.target.value})} type='text' placeholder='Name of product'/>
            <MyInput value={post.count} onChange={e => setPost({...post,count:e.target.value})} type='text' placeholder='Count of product'/>
            <MyInput value={post.width} onChange={e => setPost({...post,width:e.target.value})} type='text' placeholder='Width of product'/>
            <MyInput value={post.height} onChange={e => setPost({...post,height:e.target.value})} type='text' placeholder='Height of product'/>
            <MyInput value={post.weight} onChange={e => setPost({...post,weight:e.target.value})} type='text' placeholder='Height of product'/>
            <textarea value={post.comments} onChange={e => setPost({...post,comments:e.target.value})} cols="30" rows="4"></textarea>
            <MyButton onClick={addNewPost} className='btnForm'>add product</MyButton>
            <MyButton onClick={closeWindow} className='btnForm'>close window</MyButton>
          </form>
      </div>
    )
}

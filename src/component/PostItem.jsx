import React from 'react'
import '../index.css'
import MyButton from './UI/button/MyButton'

export default function PostItem({posts,removePost}) {
    
    return (
        posts.map((item,index) =>{
            return <div className='post' key={item.id}>
            <div className='post__content'>
            <div>
            <strong>{index + 1}.{item.name}</strong>
            <ul>
                <li>count: {item.count}</li>
                <li>width: {item.width}</li>
                <li>height: {item.height}</li>
                <li>weight: {item.weight}</li>
                <li>comments: {item.comments}</li>
            </ul>
            </div>
            <img src={item.imageUrl} alt={`img${item.id}`} className='imgIcon'/>
            </div>
            <div className='post__btn'>
            <MyButton onClick={()=>removePost(item)} className='post__btn-item'>Delete</MyButton>
            </div>
      </div>
        })
    )
}

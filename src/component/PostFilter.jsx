import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export default function PostFilter({filter,setFilter,options}) {
    return (
        <div>
            <MyInput 
                placeholder="Search..." 
                style={{marginBottom:'20px'}} 
                value={filter.query} 
                onChange={e => setFilter({...filter, query:e.target.value})}/>
            <MySelect 
                onChange={selectedSort => setFilter({...filter,sort:selectedSort})} 
                value={filter.sort} 
                defaultValue="Sort by" 
                options={options}/>
        </div>
    )
}

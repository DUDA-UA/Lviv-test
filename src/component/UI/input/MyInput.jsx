import React from 'react'
import styleInput from './MyInput.module.css'

const MyInput = React.forwardRef((props,ref) => {
    return (
        <input ref={ref} className={styleInput.myInput} {...props}/>
    )
})

export default MyInput;
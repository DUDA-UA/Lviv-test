import React from 'react';
import styleBtn from './MyButton.module.css'

export default function MyButton({children, ...props}) {
    return (
        <button {...props} className={styleBtn.createButton}>
            {children}
        </button>
    )
}

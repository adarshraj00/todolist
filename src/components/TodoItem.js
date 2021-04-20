import React from 'react'

export default function TodoItem({title,content,ondelete}) {
    return (
        <div>
           <h4>{title}</h4>
            <p>{content}</p>
            <button className="bg-dark text-white" onClick={()=>ondelete(title)}>delete</button>
        </div>
    )
}

import React from 'react'
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";


const ToDo = ({text, updateMode, deleteMode}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <BiEdit className='icon' onclick={updateMode} />
            <AiFillDelete className='icon' onclick={deleteMode} />         
        </div>
    </div>
  )
}

export default ToDo
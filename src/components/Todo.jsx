import React from 'react'
import {AiFillEdit} from 'react-icons/ai'
import { BsTrash } from "react-icons/bs";

const Todo = ({task,deleteTodo}) => {
  return (
    <div className='flex justify-between items-center bg-violet-600 text-white  py-3 px-4 rounded-md mb-1 cursor-pointer '>
          <p className='font-primary'>{task.task}</p>
          <div className='flex items-center gap-x-4 flex justify-center items-center '>
              <AiFillEdit className='text-xl' onClick={ () => editTodo(task.id)} /> 
              <BsTrash className='text-xl' onClick={() => deleteTodo(task.id)} />
          </div>
    </div>
  )
}

export default Todo

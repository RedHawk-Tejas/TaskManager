import React, { useState } from 'react'
import {MdDownloadDone, MdOutlineDelete} from 'react-icons/md'
import {HiOutlinePencil} from 'react-icons/hi'

export const TodoItems = ({taskList, onDeleteTask, search, onUpdateClick}) => {

  const [completedTask, setCompletedTask] = useState([])

  const filteredList = taskList.filter((task) => {
    return task.task.toLowerCase().includes(search.toLowerCase());
  })

  function onCheckClick(id){
    if(completedTask.includes(id)){
      setCompletedTask(completedTask.filter(
        taskId => taskId !== id
      ))
    } else {
      setCompletedTask([...completedTask, id])
    }
  }

  return (

    <ul className="flex flex-col-reverse items-center justify-between w-96 mt-5">
      
      {filteredList.map((tasks) => (

        <li key={tasks.id} className={`flex items-center justify-between w-96 border border-gray-600 mb-2 rounded p-2  ${completedTask.includes(tasks.id) ? 'bg-slate-400 line-through' : 'bg-slate-200'}`}>  
            <div className='flex items-center w-4/6'>
              <button onClick={() => onCheckClick(tasks.id)}
                className={`text-2xl ${completedTask.includes(tasks.id) ? 'text-red-600' : 'text-green-600'}`}><MdDownloadDone/></button>
              <p className='ml-3 text-base font-medium'>{tasks.task}</p>
            </div>
          <div className='flex items-center justify-between w-1/4'>
              <button onClick={() => onUpdateClick(tasks.id)}
                className='text-2xl border border-blue-600 text-blue-600 p-1 ml-5 rounded-lg'><HiOutlinePencil/></button>
              <button onClick={() => onDeleteTask(tasks.id)}
                className='text-2xl border border-red-600 text-red-600 p-1 rounded-lg'><MdOutlineDelete/></button>
          </div>
        </li>

      ))}

      </ul>
      
  )
}

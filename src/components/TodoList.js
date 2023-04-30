import React, { useState } from 'react'
import { TodoItems } from './TodoItems'
import { v4 as uuidv4 } from 'uuid'

export const TodoList = ({search}) => {

  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [toggle, setToggle] = useState(true)
  const [isEditItem, setIsEditItem] = useState(null)

  function handleAddTask(){
    if(!value){
      return;
    } else if(value && !toggle){
      setTasks(
        tasks.map((task) => {
          if(task.id === isEditItem) {
            return {...task, task: value}
          }
          return task;
        })
      )
      setValue('')
      setToggle(true)
      setIsEditItem(null)
    } else {
    const updatedTaskList = {
      id: uuidv4(),
      task: value
    }
    setTasks([...tasks, updatedTaskList])
    setValue('')
    }
  }

  function onDeleteTask(id){
    const updatedTaskList = tasks.filter((task) => task.id !== id)
    setTasks(updatedTaskList)
  }

  function onUpdateClick(id){
    let editTask = tasks.find((task) => {
      return task.id === id
    })
    console.log(editTask)
    setToggle(false)
    setValue(editTask.task)
    setIsEditItem(id)
  }

  return (
    <React.Fragment>
    <div className='flex items-center mt-5 w-96'>
      <input 
        type="text" 
        placeholder='Write Task...'
        className='w-96 rounded-lg'
        value={value}
        onChange={(e) => setValue(e.target.value)}/>

      {
        toggle ? 
        <button onClick={handleAddTask}
          className='text-white ml-2 rounded-lg bg-blue-700 w-16 hover:bg-blue-800 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700'>
        Add</button> : 
        <button onClick={handleAddTask}
          className='text-white ml-2 rounded-lg bg-blue-700 w-16 hover:bg-blue-800 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700'>
        Edit</button>
      }

      
    </div>

    <TodoItems 
      taskList={tasks} 
      onDeleteTask = {onDeleteTask}
      search={search}
      onUpdateClick={onUpdateClick}
      />
    </React.Fragment>
  )
}

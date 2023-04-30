import React, { useState } from 'react';
import { FcTodoList } from 'react-icons/fc';
import { Search } from './components/Search';
import { TodoList } from './components/TodoList';

function App() {

  const [search, setSearch] = useState('')

  return (
    <div className="App container mx-auto flex flex-col items-center justify-center">

      <div className='flex items-center justify-center my-8'>
        <FcTodoList className='text-4xl mr-4'/>
        <h1 className='text-4xl font-semibold text-red-400'>Task Manager</h1>
      </div>

      <Search setSearch={setSearch}/>

      <TodoList search={search}/>

    </div>
  );
}

export default App;

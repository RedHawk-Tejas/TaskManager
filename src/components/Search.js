import React from 'react'
import { BiSearch } from 'react-icons/bi';


export const Search = ({setSearch}) => {

  function handleSearch(e){
    setSearch(e.target.value)
  }

  return (
    <div className='flex items-center bg-white-400 w-96 rounded-lg border border-black'>
      <BiSearch className='ml-3 mr-1'/>
      <input onChange={handleSearch}
        type="text" placeholder='Search' className='ml-2 w-full rounded-r-lg border-none focus:ring-0 focus:outline-none'/>
    </div>
  )
}

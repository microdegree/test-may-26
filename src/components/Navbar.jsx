import React from 'react'
import logo from '../assets/navbar/MicroDegree Web.png'
import {SearchIcon, PhoneIcon, ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/solid'
import { Courses } from '../Courses'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

function Navbar({setSearchedResults}) {
  const [input, setInput] = useState('')
  const [dropDown, setDropDown] = useState(false)
  const [searchOutput, setSearchOutput] = useState([])
  const [viewSearchOutput, setViewSearchOutput] = useState(false)

  const keys = ["course_name","course_category"]

  useEffect(() => {
    return () => {

      if(input===''){
        // window.location.reload(true)
        setSearchOutput([])
      }
      else{
        setSearchOutput(Courses.filter((item)=> keys.some((key)=>item[key].toLowerCase().includes(input.toLowerCase()))))
      }
        
}
  }, [input])

  const handleInput =(e)=>{

    e.preventDefault()
    setViewSearchOutput(!viewSearchOutput)
    e.target.value?setInput(e.target.value):setInput('')
  }
  const handleSearched =(e)=>{
    console.log(e.target.innerText)
    setViewSearchOutput(true)
    setSearchedResults(Courses.filter((item)=> item.course_name.toLowerCase().includes(e.target.innerText.toLowerCase())))

    
  }

  return (
    <div className='flex max-h-[70px] h-full w-full p-6 2xl:max-h-[90px] 2xl:py-7 px-7  relative justify-between items-center '>
      <div className='flex-shrink flex items-center 2xl:justify-center  md:ml-6 2xl:ml-20 '>
   
        <a href='https://www.microdegree.work/'><img className="min-w-[130px] max-w-[130px] md:min-w-[140px] md:max-w-[140px] 2xl:min-w-[200px] 2xl:max-w-[200px] " src={logo} alt="" loading="lazy"/></a>
      </div>
      <div className=' flex basis-1 md:basis-7/12 sm:basis-9/12 justify-start items-center '>
        <div className=' hidden max-h-[40px]  sm:block basis-5/12 flex-shrink mr-3 relative '>
      <form className="flex h-full items-center  bg-white p-[0.4rem] py-2 2xl:py-1 2xl:h-12  rounded-md">
            <input className=' flex h-full w-full items-center justify-center text-sm 2xl:text-lg px-2 xl:placeholder:text-xs placeholder:text-sm 2xl:placeholder:px-5  outline-none' onChange={handleInput }  placeholder='What do you want to learn?' type='text'></input>
            <SearchIcon className='w-7 2xl:w-9 2xl:p-2 text-white p-1 rounded-md bg-[#FF2A67]'></SearchIcon>
          </form>
          <div className={` ${viewSearchOutput?'block':"hidden"} border-t-2 w-full absolute z-10`}>
            {searchOutput.map(item=>(
              <h1 onClick={handleSearched} key={item.id} className=' hover:text-[#FF2A67] cursor-pointer w-full bg-white text-sm 2xl:text-base py-2 text-left px-2  text-gray-700'>{item.course_name}</h1>
              ))}
          </div>
          </div>
          <ul className="flex 2xl:text-lg w-full md:basis-7/12 ml-4 sm:ml-8 justify-around items-center space-x-2 ">
            <div className=' sm:relative sm:w-full h-full w-fit sm:px-2'>
            <div className='flex items-center justify-center ' onClick={()=>setDropDown(!dropDown)}>
            <li className=' cursor-pointer hover:border-bottom select-none py-1 hover:text-[#FF2A67] rounded-full'>Courses</li>
            <ChevronDownIcon className={`w-4 cursor-pointer ${dropDown?'hidden':'block'}`}></ChevronDownIcon>
            <ChevronUpIcon className={`w-4 cursor-pointer ${dropDown?'block':'hidden'}`}></ChevronUpIcon>
            </div>
            <div className={`absolute left-10 top-20 z-10 sm:top-10 sm:left-0 w-fit select-none bg-white  py-3 ${dropDown?'block':'hidden'} whitespace-nowrap transition-all ease-linear duration-700`}>
              {Courses.map(item=>(
                <a href={item.course_link}><p className='hover:bg-[#FF2A67] hover:text-white text-left w-full bg-white text-sm 2xl:text-base py-2  px-5  text-gray-700' key={item.id}>{item.course_name}</p></a>
              ))}
            </div>
            </div>


             <a href="tel:+9108047109999"><li className='hover:bg-[#FF2A67] sm:flex justify-center w-56 hidden  hover:text-white px-3 py-1 rounded-full'> <PhoneIcon className='w-4 mr-2'></PhoneIcon> <p> 0804-710-9999</p></li></a>
              <a href="https://courses.microdegree.work/users/sign_in"><li className=' sm:hover:bg-[#FF2A67] hover:border-b-0 hover:border-[#FF2A67] hover:text-[#FF2A67] sm:px-3 py-1 sm:hover:text-white rounded-full'>Login</li></a>
              <a className='sm:hidden flex justify-center items-start' href="tel:+9108047109999"> <PhoneIcon className='w-6 ml-1 bg-[#FF2A67] text-white rounded-full p-[0.3rem]'></PhoneIcon> </a>
              
   
            </ul>
      </div>

    </div>
  )
}


export default Navbar
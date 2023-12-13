import { useState } from 'react'
import {logo, menu,close} from '../assets'
import {navLinks} from '../constants'
const Navbar = () => {
  const[active,setactive]=useState('Home')
  const[toggle,settoggle]=useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className='w-[120px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((item,index)=>(
          <li key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px]
            ${active === item.title ?'text-white':'text-dimWhite'}
           ${index===navLinks.length-1 ?'mr-0':'mr-10'}`}
            onClick={()=>setactive(item.title)}
          >
           <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center  '>
        <img src={ toggle? close:menu}
         alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={()=>settoggle(!toggle)} />
         <div className={`${!toggle?'hidden':'flex p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar'}`}>
          <ul className='list-none flex justify-end items-start flex-1 flex-col'>
          {navLinks.map((item,index)=>(
            <li key={index} 
            className={`font-poppins font-medium cursor-pointer  text-[16px]
            ${active===item.title?'text-white':'text-dimWhite'}
            ${index=== navLinks.lenght-1 ?"mb-0":"mb-4"}`}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
          </ul>
         </div>
      </div>
    </nav>
  )
}
export default Navbar
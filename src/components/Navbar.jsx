import {React, useState} from 'react'
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants';




const Navbar = () => {
const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
       <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>
       <ul className="list-none sm:flex hidden justify-end items-center flex-1"> 
        {navLinks.map((nav, index) => (
          <li 
          key={nav.id} 
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length ? 'mr-0' : 'mr-10'} hover:scale-125 duration-300 hover:text-teal-400`}> {/*Added animation! */}
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
       </ul>

        <div className="sm:hidden flex flex-1 justify-end mr-6 items-center"> {/*Mobile menu*/}
          <img 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          />

          <div 
            className={` ${toggle ? 'flex' : 'hidden'} p-3 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1"> 
        {navLinks.map((nav, index) => (
                <li 
                key={nav.id} 
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length ? 'mb-0' : 'mb-4'}`}> 
                  <a href={'#${nav.id}'}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div> 

    </nav>
  )
}

export default Navbar 
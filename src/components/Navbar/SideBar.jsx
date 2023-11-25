import React, { useEffect, useState } from 'react'
import { NavLink , Link } from 'react-router-dom'
import { HomeData } from "/src/components/Navbar/HomeData.jsx";
import { HiOutlineMenu } from "react-icons/hi";



    const imgArray = [
      "https://images.pexels.com/photos/10208097/pexels-photo-10208097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.pexels.com/photos/7789513/pexels-photo-7789513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8728385/pexels-photo-8728385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/14994089/pexels-photo-14994089/free-photo-of-woman-in-red-coat-sitting-on-chair-with-her-hair-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3209221/pexels-photo-3209221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];
    const colorCode = [
      "red", "green", "blue", "yellow", "purple", "orange", "pink",
    ]

const SideBar = ({ isActive }) => {
  
    const [show, setShow] = React.useState(false);
    const [imgUrl, setImgUrl] = useState("");
    const [color, setColor] = useState("");
    const handleClick = () => {
      setShow(!show);
      const randomColor = colorCode[Math.floor(Math.random() * colorCode.length)];
      setColor(randomColor)
    }
    const handleChange = () => {
      const randomImg = imgArray[Math.floor(Math.random() * imgArray.length)];
      setImgUrl(randomImg)
    }

    
    
  return (
    <>
      
      
      <div className='SidebarMain w-[180px] h-screen  ' >
        <button className='md:hidden w-10 h-10 text-white absolute right-2 top-2 z-[122] ' onMouseUp={handleClick}>
          {
            show == true ? <HiOutlineMenu className='text-white text-[30px]' /> : <HiOutlineMenu className={` text-[30px]`} style={{ color: `${color}` }} onMouseUp={handleChange} />

          }
        </button>
        <div className={`SideBar w-[180px] h-full overflow-x-hidden ${show == true ? ' left-0' : ' left-[-100%]'}`} style={{backgroundImage: `url(${imgUrl})`, scrollbarWidth: 'none' }}>

          <div className='SideBarChild overflow-x-hidden overflow-y-auto h-full' style={{ scrollbarWidth: 'none'}}>
            <div className={`SideBarInner w-[180px] bg-blue-400 h-auto flex flex-wrap flex-col font-serif capitalize font-[20px] pl-[15px] p-2 pr-7 `} style={{ fontFamily: 'inter-r  ', fontWeight: 'thin', }}>

              <Link to='/' className='text-white text-center text-[20px] font-black	 uppercase drop-shadow-md my-2 mb-4'>
                home
              </Link>
              {HomeData.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`nav-link my-1 ${item.isActive ? 'active' : 'not-active'}`}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default SideBar
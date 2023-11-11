import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import { HiOutlineMenu } from "react-icons/hi";



const SideBar = ({ isActive }) => {
    const [show, setShow] = React.useState('');

  return (
    <>
      <div className='SideBar w-[180px] h-screen overflow-y-auto overflow-x-hidden' >

        <div className='SideBarInner flex flex-wrap flex-col w-auto font-serif capitalize font-[20px] bg-blue-600 p-2 ' style={{ fontFamily: 'inter-r' }}>
        <Link to='/' className='text-white text-center text-[20px] font-black	 uppercase drop-shadow-md my-2 mb-4'>
            home
        </Link>
          <NavLink to="/AbellaDanger" className={`nav-link my-1 ${isActive ? 'active' : 'not-active'}`}>abella danger</NavLink>
          <NavLink to='/AlexaGrace' className={`nav-link my-1 ${isActive ? 'active' : 'not-active'}`}>alexa grace</NavLink>
          <NavLink to='/ArianaMarie' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>ariana marie</NavLink>
          <NavLink to='/AugustAmes' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>august ames</NavLink>
          <NavLink to='/AveryCristy' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>avery cristy</NavLink>

          <NavLink to='/BellaRolland' className={`nav-link my-1 ${isActive ? 'active' : 'not-active'}`}>bella roland</NavLink>
          <NavLink to='/BlakeEden' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>blake eden</NavLink>
          <NavLink to='/BunnyColby' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>bunny colby</NavLink>
          

          <NavLink to='/MilaAzul' className={`nav-link my-1 ${isActive ? 'active' : 'not-active'}`}>mila azul</NavLink>
          <NavLink to='/MollyLittle' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>molly little</NavLink>

          <NavLink to='/NancyAce' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>nancy ace</NavLink>
          <NavLink to='/NaomiSwann' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>naomi swann</NavLink>

          <NavLink to='/RikaFane' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>rika fane</NavLink>
          <NavLink to='/RileyReid' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>riley reid</NavLink>

          <NavLink to='/ScarlitScandal' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>scarlit scandal</NavLink>
          <NavLink to='/StacyCruz' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>stacy cruz</NavLink>
          <NavLink to='/Sybil' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>sybil</NavLink>

          <NavLink to='/TiffanyTatum' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>tiffany tatum</NavLink>
          <NavLink to='/ToriBlack' className={`nav-link my-1 ${isActive? 'active' : 'not-active'}`}>tori black</NavLink>

          <NavLink to='/UmaJolie' className={`nav-link my-1 ${isActive ? 'active' : 'not-active'}`}>uma jolie</NavLink>
        </div>
      </div>
    </>
  )
}

export default SideBar
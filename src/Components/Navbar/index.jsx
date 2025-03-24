import './Navbar.css'
import {tabs} from "../../sources"
import { Link } from 'react-scroll';
import Logo from '../../Commons/Logo';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import SocialHandles from '../../Commons/SocialHandles';
import cv from "../../assets/cv.pdf"

function Navbar() {
    const [openSidebar, setOpenSidebar] = useState(false)

    return (
        <nav className=" navbar flex">
            {openSidebar? <div className='overlay'  onClick={()=>setOpenSidebar(!openSidebar)}></div> : ""
            }
            <Logo/>
            <div className={`box flex-center tabs-group sidebar ${openSidebar? 'visible': ""}`}>
                <div className="flex-center icon-wrapper cancel-btn"
                onClick={()=>setOpenSidebar(!openSidebar)}>
                    <FaTimes/>
                </div>
                {
                    tabs.map((tabs,index)=>(
                        <Link
                         to={tabs.id}
                         smooth={true}
                         spy={true}
                         className='tab'
                         activeClass='active'
                         key={index}
                         onClick={()=>setOpenSidebar(false)}
                        >
                            {tabs.name}
                        </Link>
                    ))
                }
            </div>
            <SocialHandles/>
            <div className="box flex-center buttons">
                <a  href={cv} target='_blank' className='btn primary contact-btn'>Mon CV</a>
                <Link to="services" smooth={true} className='btn services-btn'>Services</Link>
                <div className="flex-center icon-wrapper menu-btn"
                onClick={()=>{setOpenSidebar(!openSidebar)}}>
                    <HiMenu/>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;
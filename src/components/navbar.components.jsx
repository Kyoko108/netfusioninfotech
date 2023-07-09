/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { Fragment }  from "react";

import Marquee from "react-fast-marquee";



 const Navbar = () => {
 
    return (
      
      <>
    <div>
      <Marquee className="relative text-black bg-gradient-to-bl from-yellow-500 via-red-500 to-blue-500 background-animate" onMouseOver="this.stop()" onMouseOut="this.start()" >
        ADMISSION NOTICE FOR KINDERGARTEN(KG) AND CLASS 1 FOR 2026-24, PLEASE CHECK ADMISSION SECTION****** ISC-2022-ISSUE OF DOCUMENTS, KINDLY CHECK WEBSITE NOTICE BOARD****FEES CAN BE PAID ON ANY DAY BETWEEN 5TH AND 20TH OF EVERY MONTH.
        </Marquee>
       

      
      <br/>
      <br/>
      <br/>
      
      &nbsp;
      <div className="navbar bg-base-100  flex space-x-0.5 rounded-xl bg-blue-900/20 p-1 bg-gradient-to-tr
    from-pink-500
    via-red-400
    to-blue-500
    background-animate shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-100">
          <li>
          <a className="text-base-100">About Us</a>
          <ul className="p-2">
            <li><a>NetFusionInfotech</a></li>
            <li><a>Aim Vision and Mission </a></li>
            <li><a>Achievements </a></li>
          </ul>
        </li>
        <li>
          <a className="text-base-100">School</a>
          <ul className="p-2">
            <li><a>Facilities</a></li>
            <li><a>Curriculum </a></li>
            <li><a>Cocurriculum </a></li>
            <li><a>Syllabus </a></li>
            <li><a>Prospectus </a></li>
          </ul>
        </li>
        <li>
          <a className="text-base-100">Staff</a>
          <ul className="p-2">
            <li><a>Teachers</a></li>
            <li><a>Non Teaching Staff </a></li>
            </ul>
        </li>
        <li>
          <a className="text-base-100">Notice Board</a>
          <ul className="p-2">
            <li><a>Junior Section </a></li>
            <li><a>Senior Section  </a></li>
            
          </ul>
        </li>
        <li>
          <a className="text-base-100">Admission</a>
        </li>
        <li>
          <a className="text-base-100">Fees Payment</a>
        </li>
        <li>
          <a className="text-base-100">Gallery </a>
        </li>
        <li>
          <a>Profile</a>
          <ul className="p-2">
          <li><a href = '/Login'>Login</a></li>
            <li><a href = '/Signup' >Signup </a></li>
            <li><a>Contacts </a></li></ul>
        </li>
      </ul>
    </div>
    <a className="text-xl normal-case btn btn-ghost text-base-100" href="/">Home</a>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
      <li tabIndex={0}>
        <details>
          <summary className="text-base-100">AboutUs</summary>
          <ul className="p-2">
            <li><a>NetFusionInfotech</a></li>
            <li><a>Aim Vision and Mission </a></li>
            <li><a>Achievements </a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={1}>
        <details>
          <summary className="text-base-100">School</summary>
          <ul className="p-2">
             <li><a>Facilities</a></li>
            <li><a>Curriculum </a></li>
            <li><a>Cocurriculum </a></li>
            <li><a>Syllabus </a></li>
            <li><a>Prospectus </a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={2}>
        <details>
          <summary className="text-base-100">Staff</summary>
          <ul className="p-2">
            <li><a>Teachers</a></li>
            <li><a>Non Teaching Staff </a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={3}>
        <details>
          <summary className="text-base-100">Notice Board</summary>
          <ul className="p-2">
            <li><a>Junior Section </a></li>
            <li><a>Senior Section  </a></li>
          </ul>
        </details>
      </li>
      <li>
          <a className="text-base-100">Admission</a>
        </li>
        <li>
          <a className="text-base-100">Fees Payment</a>
        </li>
        <li>
          <a className="text-base-100">Gallery </a>
        </li>
        <li tabIndex={0}>
        <details>
          <summary className="text-base-100">Profile</summary>
          <ul className="p-2">
            <li><a href = '/Login'>Login</a></li>
            <li><a href = '/Signup' >Signup </a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-accent btn-outline text-base-100">Contact</a>
  </div>
</div>
 </div>
    </>
    
    
    );
}
export default Navbar;
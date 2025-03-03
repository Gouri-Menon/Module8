import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

const Sidebar = ({ showSidebar, setActivePage, setResetForm }) => {
  const [showDashboardDropdown, setShowDashboardDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState(''); 

  const handleLinkClick = (page) => {
    setActivePage(page);
    setActiveLink(page);
  };

  const handleExamRegistrationClick = () => {
    handleLinkClick('examRegistration');
    setResetForm(true);
  };

  const handleAttendanceClick = () => {
    handleLinkClick('attendance');
  };

  const handleMarksClick = () => {
    handleLinkClick('marks');
  };

  return (
    <div className={`${showSidebar ? "block" : "hidden"} w-64 bg-[#002147] fixed h-full px-2`}>
      <div className='mb-4 my-2'>
        <h1 className='text-2x bg-[#002147] px-3 mt-4 text-white font-bold'>Menu</h1>
      </div>
      <hr />
      <ul className='text-white bg-[#002147] font-bold'>
        <li className={`mb-2 rounded py-2 ${activeLink === 'dashboard' ? 'bg-[#4A90E2]' : 'hover:bg-[#4A90E2]'}`}>
          <a href='#' className='px-3 flex items-center' onClick={() => setShowDashboardDropdown(!showDashboardDropdown)}>
            <MdDashboard className='inline-block w-6 h-5 mr-2 -mt-2' />Dashboard
          </a>
          {showDashboardDropdown && (
            <ul className='ml-4'>
              <li className={`mb-2 mr-2 rounded py-2 ${activeLink === 'examRegistration' ? 'bg-[#4A90E2] text-white' : 'bg-white text-[#002147] '}`}>
                <a href='#' className='px-3' onClick={handleExamRegistrationClick}>
                  Exam Registration
                </a>
              </li>
            </ul>
          )}
        </li>

        <li className={`mb-2 rounded py-2 ${activeLink === 'attendance' ? 'bg-[#4A90E2]' : 'hover:bg-[#4A90E2]'}`}>
          <a href='#' className='px-3 flex items-center' onClick={handleAttendanceClick}>
            <IoShieldCheckmarkSharp className='inline-block w-6 h-5 mr-2 -mt-2' />Attendance
          </a>
        </li>

        <li className={`mb-2 rounded py-2 ${activeLink === 'marks' ? 'bg-[#4A90E2]' : 'hover:bg-[#4A90E2]'}`}>
          <a href='#' className='px-3 flex items-center' onClick={() => handleMarksClick('marks')}>
            <FaUserGraduate className='inline-block w-6 h-5 mr-2 -mt-2' />Marks
          </a>
        </li>

        <li className={`mb-2 rounded py-2 ${activeLink === 'certificate' ? 'bg-[#4A90E2]' : 'hover:bg-[#4A90E2]'}`}>
          <a href='#' className='px-3 flex items-center' onClick={() => handleLinkClick('certificate')}>
            <PiCertificateFill className='inline-block w-6 h-5 mr-2 -mt-2' />Certificate
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
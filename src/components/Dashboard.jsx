import React, { useState } from 'react';
import Navbar from './Navbar';
import ExamRegistration from './ExamRegistration';
import Attendance from './Attendance';
import Marks from './Marks';

const Dashboard = ({ showSidebar, setShowSidebar, activePage, setActivePage }) => {
  const [showExamRegistration, setShowExamRegistration] = useState(true); 
  const [resetForm, setResetForm] = useState(false);
  const [showAttendance, setShowAttendance] = useState(true);
  const [showMarks, setShowMarks] = useState(true);

  const handleExamRegistrationClick = () => {
    if (showExamRegistration) {
      setActivePage('dashboard'); 
    } else {
      setShowExamRegistration(true);
    }
    setResetForm(true); 
  };

  const handleAttendanceClick= () => {
    if (showAttendance) {
      setActivePage('dashboard'); 
    } else {
      setShowAttendance(true);
    }
  };

  const handleMarksClick= () => {
    if (showMarks) {
      setActivePage('dashboard'); 
    } else {
      setShowMarks(true);
    }
  };


  return (
    <div className={`${showSidebar ? "ml-64" : ""} w-full`}>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="p-4">
        {activePage === 'dashboard' && (
          <div>

          </div>
        )}
        {activePage === 'examRegistration' && (
          <div className="h-screen" onClick={handleExamRegistrationClick}>
            {showExamRegistration && <ExamRegistration resetForm={resetForm} setResetForm={setResetForm} />}
          </div>
        )}
        {activePage === 'attendance' && (
          <div className="h-screen" onClick={handleAttendanceClick}>
           {showAttendance && <Attendance />}
          </div>
        )}
        {activePage === 'marks' && (
          <div className="h-screen" onClick={handleMarksClick}>
            {showMarks && <Marks />}
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;
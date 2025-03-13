import React, { useState } from 'react';
import Navbar from './Navbar';
import ExamRegistration from './ExamRegistration';
import Attendance from './Attendance';
import Marks from './Marks';
import Certificate from './Certificate';
import Dashboard from './Dashboard';

const Home = ({ showSidebar, setShowSidebar, activePage, setActivePage }) => {
    const [showExamRegistration, setShowExamRegistration] = useState(true);
    const [resetForm, setResetForm] = useState(false);
    const [showAttendance, setShowAttendance] = useState(true);
    const [showMarks, setShowMarks] = useState(true);
    const [showCertificate, setShowCertificate] = useState(true);
    const [showDashboard, setShowDashboard] = useState(true);

    const handleDashboardClick = () => {
        if (showDashboard) {
            setActivePage('home');
        } else {
            setShowDashboard(true);
        }
    }

    const handleExamRegistrationClick = () => {
        if (showExamRegistration) {
            setActivePage('home');
        } else {
            setShowExamRegistration(true);
        }
        setResetForm(true);
    };

    const handleAttendanceClick = () => {
        if (showAttendance) {
            setActivePage('home');
        } else {
            setShowAttendance(true);
        }
    };

    const handleMarksClick = () => {
        if (showMarks) {
            setActivePage('home');
        } else {
            setShowMarks(true);
        }
    };

    const handleCertificateClick = () => {
        if (showCertificate) {
            setActivePage('home');
        } else {
            setShowCertificate(true);
        }
    };


    return (
        <div className={`${showSidebar ? "ml-64" : ""} w-full`}>
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <div className="p-4">
                {activePage === 'home' && (
                    <div>

                    </div>
                )}

                {activePage === 'dashboard' && (
                    <div className="h-screen" onClick={handleDashboardClick}>
                        {showDashboard && <Dashboard />}
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
                {activePage === 'certificate' && (
                    <div className="h-screen" onClick={handleCertificateClick}>
                        {showCertificate && <Certificate />}
                    </div>
                )}


            </div>
        </div>
    );
}

export default Home;
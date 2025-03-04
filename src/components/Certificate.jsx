import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = () => {
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [generatedCertificate, setGeneratedCertificate] = useState(false);
  const certificateRef = useRef(null);

  const handleGenerate = () => {
    if (studentName.trim() && courseName.trim()) {
      setGeneratedCertificate(true);
    } else {
      alert('Please enter both student name and course name');
    }
  };

  const handleDownload = () => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('landscape');
        pdf.addImage(imgData, 'PNG', 10, 10, 280, 190);
        pdf.save('certificate.pdf');
      });
    }
  };

  const resetCertificate = () => {
    setStudentName('');
    setCourseName('');
    setGeneratedCertificate(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md shadow-2xl border-2 border-blue-200 bg-white rounded-lg">
        <div className="bg-[#002147] text-white rounded-t-lg p-4">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center">
            Certificate 
          </h2>
        </div>
        <div className="p-6">
          {!generatedCertificate ? (
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="studentName" 
                  className="text-blue-800 font-semibold"
                >
                  Student Name
                </label>
                <input
                  id="studentName"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter full name"
                  className="mt-2 w-full p-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label 
                  htmlFor="courseName" 
                  className="text-blue-800 font-semibold"
                >
                  Course Name
                </label>
                <input
                  id="courseName"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  placeholder="Enter course title"
                  className="mt-2 w-full p-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button 
                onClick={handleGenerate} 
                className="w-full bg-[#4A90E2] text-white p-2 rounded hover:bg-[#002147] transition-colors duration-300"
              >
                Generate Certificate
              </button>
            </div>
          ) : (
            <div 
              ref={certificateRef} 
              className="certificate bg-white border-4 border-blue-600 p-8 text-center relative rounded-lg shadow-lg"
            >
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-blue-600 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-blue-600 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-blue-600 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-blue-600 rounded-br-lg"></div>

              {/* Background Watermark */}
              <div 
                className="absolute inset-0 opacity-10 bg-blue-500 z-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 25px, rgba(0,0,255,0.1) 25px, rgba(0,0,255,0.1) 50px)'
                }}
              ></div>

              <div className="relative z-10">
                <h1 className="text-5xl font-extrabold text-blue-900 mb-6 tracking-wider">
                  Certificate of Completion
                </h1>
                <div className="my-10 space-y-4">
                  <p className="text-2xl text-gray-700">
                    This is to certify that
                  </p>
                  <h2 className="text-4xl font-bold text-blue-800 my-4 italic">
                    {studentName}
                  </h2>
                  <p className="text-2xl text-gray-700">
                    has successfully completed the course
                  </p>
                  <h3 className="text-3xl font-semibold text-blue-800 mt-4 uppercase">
                    {courseName}
                  </h3>
                </div>
                <div className="flex justify-between mt-16">
                  <div className="w-1/3">
                    <div className="border-t-2 border-gray-500 pt-2">
                      <p className="text-sm text-gray-600">Course Instructor</p>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="border-t-2 border-gray-500 pt-2">
                      <p className="text-sm text-gray-600">Date</p>
                      {new Date().toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {generatedCertificate && (
            <div className="flex space-x-4 mt-6">
              <button 
                onClick={handleDownload} 
                className="w-1/2 bg-[#002147] text-white p-2 rounded hover:bg-[#4A90E2] transition-colors duration-300"
              >
                Download Certificate
              </button>
              <button 
                onClick={resetCertificate} 
                className="w-1/2 bg-[#002147] text-white p-2 rounded hover:bg-[#4A90E2] transition-colors duration-300"
              >
                Generate New
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
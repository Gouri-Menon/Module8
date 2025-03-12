import React, { useState, useEffect } from 'react';
import MCQTest from './MCQTest'; // Import the MCQTest component
import SubjectiveTest from './SubjectiveTest'; // Import the SubjectiveTest component

const ExamRegistration = ({ resetForm, setResetForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    doe: '',
    exam: '',
    examType: {
      mcq: false,
      subjective: false
    }
  });

  const [errors, setErrors] = useState({});
  const [showMCQTest, setShowMCQTest] = useState(false); // State to control visibility of MCQTest
  const [showSubjectiveTest, setShowSubjectiveTest] = useState(false); // State to control visibility of SubjectiveTest

  useEffect(() => {
    if (resetForm) {
      setFormData({
        name: '',
        email: '',
        doe: '',
        exam: '',
        examType: {
          mcq: false,
          subjective: false
        }
      });
      setErrors({});
      setResetForm(false); 
    }
  }, [resetForm, setResetForm]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        examType: {
          ...formData.examType,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.doe) newErrors.doe = 'Date of Exam is required';
    if (!formData.exam) newErrors.exam = 'Exam is required';
    if (!formData.examType.mcq && !formData.examType.subjective) {
      newErrors.examType = 'At least one exam type must be selected';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
      // Show MCQTest component if MCQ checkbox is checked
      setShowMCQTest(formData.examType.mcq);
      // Show SubjectiveTest component if Subjective checkbox is checked
      setShowSubjectiveTest(formData.examType.subjective);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        doe: '',
        exam: '',
        examType: {
          mcq: false,
          subjective: false
        }
      });
      setErrors({});
    }
  };

  return (
    <div className="p-8 bg-white text-left mt-0">
      {showMCQTest ? (
        <MCQTest /> // Conditionally render MCQTest component
      ) : showSubjectiveTest ? (
        <SubjectiveTest /> // Conditionally render SubjectiveTest component
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-2 text-[#002147]">Exam Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength="50"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                maxLength="50"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Date of Exam</label>
              <input
                type="date"
                name="doe"
                value={formData.doe}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.doe && <p className="text-red-500 text-sm">{errors.doe}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <select
                name="exam"
                value={formData.exam}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Geography">Geography</option>
                <option value="English">English</option>
              </select>
              {errors.exam && <p className="text-red-500 text-sm">{errors.exam}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Exam Type</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="mcq"
                  checked={formData.examType.mcq}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="mr-4">MCQ</label>
                <input
                  type="checkbox"
                  name="subjective"
                  checked={formData.examType.subjective}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Subjective Test</label>
              </div>
              {errors.examType && <p className="text-red-500 text-sm">{errors.examType}</p>}
            </div>
            <button type="submit" className="w-full py-3 bg-[#002147] text-white font-semibold rounded-lg hover:bg-[#4A90E2] transition duration-300">
              Register
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ExamRegistration;
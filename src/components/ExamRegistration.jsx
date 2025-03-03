import React, { useState, useEffect } from 'react';

const ExamRegistration = ({ resetForm, setResetForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    doe: '',
    exam: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (resetForm) {
      setFormData({
        name: '',
        email: '',
        doe: '',
        subject: ''
      });
      setErrors({});
      setResetForm(false); 
    }
  }, [resetForm, setResetForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.exam) newErrors.exam = 'Exam is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        doe: '',
        subject: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="p-8 bg-white text-left mt-0">
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
            name="date of exam"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.exam}
            onChange={handleChange}
            maxLength="50"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.exam && <p className="text-red-500 text-sm">{errors.exam}</p>}
        </div>
        <button type="submit" className="w-full py-3 bg-[#002147] text-white font-semibold rounded-lg hover:bg-[#4A90E2] transition duration-300">
          Register
        </button>
      </form>
    </div>
  );
};

export default ExamRegistration;
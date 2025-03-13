import React, { useState } from 'react';

const SubjectiveTest = () => {
  const questions = [
    { id: 1, question: 'Describe the process of photosynthesis.' },
    // Add more questions as needed
  ];

  const [answers, setAnswers] = useState({});
  const [files, setFiles] = useState({});
  const [unansweredCount, setUnansweredCount] = useState(questions.length);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers, [questionId]: answer };
      setUnansweredCount(questions.length - Object.keys(newAnswers).length);
      return newAnswers;
    });
  };

  const handleFileChange = (questionId, file) => {
    setFiles((prevFiles) => ({ ...prevFiles, [questionId]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answers submitted:', answers);
    console.log('Files uploaded:', files);
    setSubmitted(true);
  };

  return (
    <div className="mt-8 p-8 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Subjective Test</h3>
      {submitted ? (
        <p className="text-green-500 font-semibold">Submitted successfully</p>
      ) : (
        <>
          <p>Total Questions: {questions.length}</p>
          <p>Unanswered Questions: {unansweredCount}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {questions.map((q) => (
              <div key={q.id}>
                <label className="block text-gray-700 font-semibold mb-2">{q.question}</label>
                <textarea
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                ></textarea>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Upload File</label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(q.id, e.target.files[0])}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
            <button type="submit" className="w-full py-3 bg-[#002147] text-white font-semibold rounded-lg hover:bg-[#4A90E2] transition duration-300">
              Submit Answer
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default SubjectiveTest;
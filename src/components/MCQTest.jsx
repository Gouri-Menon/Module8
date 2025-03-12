import React, { useState } from 'react';

const MCQTest = () => {
  const questions = [
    { id: 1, question: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] },
    { id: 2, question: 'Question 2', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] },
    // Add more questions as needed
  ];

  const [answers, setAnswers] = useState({});
  const [unansweredCount, setUnansweredCount] = useState(questions.length);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers, [questionId]: answer };
      setUnansweredCount(questions.length - Object.keys(newAnswers).length);
      return newAnswers;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answers submitted:', answers);
    setSubmitted(true);
  };

  return (
    <div className="mt-8 p-8 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold mb-4">MCQ Test</h3>
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
                {q.options.map((option, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      type="radio"
                      name={`q${q.id}`}
                      value={option}
                      onChange={() => handleAnswerChange(q.id, option)}
                      className="mr-2"
                    />
                    <label className="mr-4">{option}</label>
                  </div>
                ))}
              </div>
            ))}
            <button type="submit" className="w-full py-3 bg-[#002147] text-white font-semibold rounded-lg hover:bg-[#4A90E2] transition duration-300">
              Submit Test
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default MCQTest;
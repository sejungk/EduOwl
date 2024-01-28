import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import SolidBttn from './SolidBttn';
import StrokeBttn from './StrokeBttn';
import QuestionPage1 from './question-pages/QuestionPage1';
import QuestionPage2 from './question-pages/QuestionPage2';
import QuestionPage3 from './question-pages/QuestionPage3';
import QuestionPage4 from './question-pages/QuestionPage4';
import QuestionPage5 from './question-pages/QuestionPage5';
import '../styles/Questionnaire.css';

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedEnjoyableSubjects, setSelectedEnjoyableSubjects] = useState([]);
  const [selectedExcelSubjects, setSelectedExcelSubjects] = useState([]);
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  const [selectedWeaknesses, setSelectedWeaknesses] = useState([]);
  const [responses, setResponses] = useState({});


  const updateSelectedEnjoyableSubjects = (subject, isRemoval) => {
    setSelectedEnjoyableSubjects((prevSelected) => {
      if (isRemoval) {
        return prevSelected.filter((item) => item !== subject);
      } else {
        return [...prevSelected, subject];
      }
    });

    setResponses((prevResponses) => {
      const currentSelectedSubjects = prevResponses[2]?.selectedEnjoyableSubjects.includes(subject)
        ? prevResponses[2]?.selectedEnjoyableSubjects.filter((item) => item !== subject)
        : [...prevResponses[2]?.selectedEnjoyableSubjects || [], subject];

      return {
        ...prevResponses,
        2: {
          selectedEnjoyableSubjects: currentSelectedSubjects,
        },
      };
    });
  };

  const updateSelectedExcelSubjects = (subject, isRemoval) => {
    setSelectedExcelSubjects((prevSelected) => {
      if (isRemoval) {
        return prevSelected.filter((item) => item !== subject);
      } else {
        return [...prevSelected, subject];
      }
    });

    setResponses((prevResponses) => {
      const currentSelectedSubjects = prevResponses[3]?.selectedExcelSubjects.includes(subject)
        ? prevResponses[3]?.selectedExcelSubjects.filter((item) => item !== subject)
        : [...prevResponses[3]?.selectedExcelSubjects || [], subject];

      return {
        ...prevResponses,
        3: {
          selectedExcelSubjects: currentSelectedSubjects,
        },
      };
    });
  };

  const updateSelectedStrengths = (strength, isRemoval) => {
    setSelectedStrengths((prevSelected) => {
      if (isRemoval) {
        return prevSelected.filter((item) => item !== strength);
      } else {
        return [...prevSelected, strength];
      }
    });

    setResponses((prevResponses) => {
      const currentSelectedStrengths = prevResponses[4]?.selectedStrengths.includes(strength)
        ? prevResponses[4]?.selectedStrengths.filter((item) => item !== strength)
        : [...prevResponses[4]?.selectedStrengths || [], strength];

      return {
        ...prevResponses,
        4: {
          selectedStrengths: currentSelectedStrengths,
        },
      };
    });
  };

  const updateSelectedWeaknesses = (strength, isRemoval) => {
    setSelectedWeaknesses((prevSelected) => {
      if (isRemoval) {
        return prevSelected.filter((item) => item !== strength);
      } else {
        return [...prevSelected, strength];
      }
    });

    setResponses((prevResponses) => {
      const currentSelectedWeaknesses = prevResponses[5]?.selectedWeaknesses.includes(strength)
        ? prevResponses[5]?.selectedWeaknesses.filter((item) => item !== strength)
        : [...prevResponses[5]?.selectedWeaknesses || [], strength];

      return {
        ...prevResponses,
        5: {
          selectedWeaknesses: currentSelectedWeaknesses,
        },
      };
    });
  };

  const handleNextQuestion = (questionNumber, response) => {
    setResponses((prevResponses) => ({ ...prevResponses, [questionNumber]: response }));
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleNameChange = (name) => {
    setResponses((prevResponses) => ({ ...prevResponses, 1: name }));
  };

  useEffect(() => {
    console.log('Updated Responses:', responses);
  });

  const handleBackQuestion = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 1));
  };

  const renderQuestionContent = (questionNumber) => {
    switch (questionNumber) {
      case 1:
        return <QuestionPage1 name={responses[1]} onNameChange={handleNameChange} />;
      case 2:
        return <QuestionPage2 updateSelectedEnjoyableSubjects={updateSelectedEnjoyableSubjects} />;
      case 3:
        return <QuestionPage3 updateSelectedExcelSubjects={updateSelectedExcelSubjects} />;
      case 4:
        return <QuestionPage4 updateSelectedStrengths={updateSelectedStrengths} />;
      case 5:
        return <QuestionPage5 updateSelectedWeaknesses={updateSelectedWeaknesses} />;
      case 6:
        return <p>Question {questionNumber}.</p>;
      default:
        return <p>No content for this question.</p>;
    }
  };

  const handleCompleteQuestionnaire = () => {
    console.log('Final Responses:', responses);
  };

  return (
    <div className="questionnaire">
      <ProgressBar currentQuestion={currentQuestion} totalQuestions={5} />

      {renderQuestionContent(currentQuestion)}
      <div className="buttonContainer">
        <StrokeBttn
          onClick={handleBackQuestion}
          label="Back"
          className={`backButton ${currentQuestion <= 1 ? 'disabled' : ''}`}
        />
        {currentQuestion === 5 ? (
          <SolidBttn onClick={handleCompleteQuestionnaire} label="Submit" />
        ) : (
          <SolidBttn
            onClick={() => handleNextQuestion(currentQuestion, responses[currentQuestion] || null)}
            label="Continue"
          />
        )}
      </div>
    </div>
  );
};

export default Questionnaire;

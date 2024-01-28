import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import SolidBttn from './SolidBttn';
import StrokeBttn from './StrokeBttn';
import QuestionPage1 from './question-pages/QuestionPage1';
import QuestionPage2 from './question-pages/QuestionPage2';
import QuestionPage3 from './question-pages/QuestionPage3';
import QuestionPage4 from './question-pages/QuestionPage4';
import QuestionPage5 from './question-pages/QuestionPage5';
import QuestionPage6 from './question-pages/QuestionPage6';
import QuestionPage7 from './question-pages/QuestionPage7';
import ChatBot from './ChatBot'
import '../styles/Questionnaire.css';

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedEnjoyableSubjects, setSelectedEnjoyableSubjects] = useState([]);
  const [selectedExcelSubjects, setSelectedExcelSubjects] = useState([]);
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  const [selectedWeaknesses, setSelectedWeaknesses] = useState([]);
  const [selectedRange, setSelectedRange] = useState([]);
  const [selectedAspect, setSelectedAspect] = useState([]);
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
      const currentSelectedSubjects = prevResponses.enjoyableSubjects?.selectedEnjoyableSubjects.includes(subject)
        ? prevResponses.enjoyableSubjects?.selectedEnjoyableSubjects.filter((item) => item !== subject)
        : [...prevResponses.enjoyableSubjects?.selectedEnjoyableSubjects || [], subject];

        return {
          ...prevResponses,
          enjoyableSubjects: {
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
      const currentSelectedSubjects = prevResponses.excelSubjects?.selectedExcelSubjects.includes(subject)
        ? prevResponses.excelSubjects?.selectedExcelSubjects.filter((item) => item !== subject)
        : [...prevResponses.excelSubjects?.selectedExcelSubjects || [], subject];

      return {
        ...prevResponses,
        excelSubjects: {
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
      const currentSelectedStrengths = prevResponses.strengths?.selectedStrengths.includes(strength)
        ? prevResponses.strengths?.selectedStrengths.filter((item) => item !== strength)
        : [...prevResponses.strengths?.selectedStrengths || [], strength];

      return {
        ...prevResponses,
        strengths: {
          selectedStrengths: currentSelectedStrengths,
        },
      };
    });
  };

  const updateSelectedWeaknesses = (weakness, isRemoval) => {
    setSelectedWeaknesses((prevSelected) => {
      if (isRemoval) {
        return prevSelected.filter((item) => item !== weakness);
      } else {
        return [...prevSelected, weakness];
      }
    });

    setResponses((prevResponses) => {
      const currentSelectedWeaknesses = prevResponses.weaknesses?.selectedWeaknesses.includes(weakness)
        ? prevResponses.weaknesses?.selectedWeaknesses.filter((item) => item !== weakness)
        : [...prevResponses.weaknesses?.selectedWeaknesses || [], weakness];

      return {
        ...prevResponses,
        weaknesses: {
          selectedWeaknesses: currentSelectedWeaknesses,
        },
      };
    });
  };

  const updateSelectedRange = (range, isRemoval) => {
    setSelectedRange((prevSelected) => {
      if (isRemoval) {
        return prevSelected.filter((item) => item !== range);
      } else {
        return [...prevSelected, range];
      }
    });

    setResponses((prevResponses) => {
      const currentSelectedRange = prevResponses.expectedSalary?.selectedRange.includes(range)
        ? prevResponses.expectedSalary?.selectedRange.filter((item) => item !== range)
        : [...prevResponses.expectedSalary?.selectedRange || [], range];

      return {
        ...prevResponses,
        expectedSalary: {
          selectedRange: currentSelectedRange,
        },
      };
    });
  };

  const updateSelectedAspect = (aspect, isRemoval) => {
    setSelectedAspect((prevSelected) => {
      if (isRemoval) {
        return prevSelected.filter((item) => item !== aspect);
      } else {
        return [...prevSelected, aspect];
      }
    });

    setResponses((prevResponses) => {
      const currentSelectedAspect = prevResponses.importantAspects?.selectedAspect.includes(aspect)
        ? prevResponses.importantAspects?.selectedAspect.filter((item) => item !== aspect)
        : [...prevResponses.importantAspects?.selectedAspect || [], aspect];

      return {
        ...prevResponses,
        importantAspects: {
          selectedAspect: currentSelectedAspect,
        },
      };
    });
  };

  const handleNextQuestion = (questionNumber, response) => {
    if (questionNumber === '1') {
      setResponses((prevResponses) => ({ ...prevResponses,  name: response }));
    }
    else if (questionNumber === '2') {
      setResponses((prevResponses) => ({ ...prevResponses, enjoyableSubjects: response }));
    }
    else if (questionNumber === '3') {
      setResponses((prevResponses) => ({ ...prevResponses, excelSubjects: response }));
    }
    else if (questionNumber === '4') {
      setResponses((prevResponses) => ({ ...prevResponses, strengths: response }));
    }
    else if (questionNumber === '5') {
      setResponses((prevResponses) => ({ ...prevResponses, weaknesses: response }));
    }
    else if (questionNumber === '6') {
      setResponses((prevResponses) => ({ ...prevResponses, expectedSalary: response }));
    }
    else if (questionNumber === '7') {
      setResponses((prevResponses) => ({ ...prevResponses, importantAspects: response }));
    }
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  useEffect(() => {
    console.log('Updated Responses:', responses);
  }, [responses]); // Add responses as a dependency to useEffect

  const handleNameChange = (name) => {
    setResponses((prevResponses) => ({ ...prevResponses, name }));
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
        return <QuestionPage1 name={responses.name} onNameChange={handleNameChange} />;
      case 2:
        return <QuestionPage2 updateSelectedEnjoyableSubjects={updateSelectedEnjoyableSubjects} />;
      case 3:
        return <QuestionPage3 updateSelectedExcelSubjects={updateSelectedExcelSubjects} />;
      case 4:
        return <QuestionPage4 updateSelectedStrengths={updateSelectedStrengths} />;
      case 5:
        return <QuestionPage5 updateSelectedWeaknesses={updateSelectedWeaknesses} />;
      case 6:
        return <QuestionPage6 updateSelectedRange={updateSelectedRange} />;
      case 7:
        return <QuestionPage7 updateSelectedAspect={updateSelectedAspect} />;
      case 8:
        return <ChatBot responses={responses}/>;
      default:
        return <p>No content for this question.</p>;
    }
  };

  const handleCompleteQuestionnaire = () => {
    console.log('Final Responses:', responses);
  };

  return (
    <div className={`${currentQuestion === 8 ? 'chatBotContainer' : 'questionnaire '}`}>
      {currentQuestion !== 8 && <ProgressBar currentQuestion={currentQuestion} totalQuestions={7} />}

      {renderQuestionContent(currentQuestion)}
      {currentQuestion !== 8 && <div className="buttonContainer">
        <StrokeBttn
          onClick={handleBackQuestion}
          label="Back"
          className={`backButton ${currentQuestion <= 1 ? 'disabled' : ''}`}
        />
         <SolidBttn
          onClick={() => handleNextQuestion(currentQuestion, responses[currentQuestion] || null)}
          label="Continue"
        />
      </div>
      }
    </div>
  );
};

export default Questionnaire;



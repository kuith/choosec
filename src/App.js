import { useState, useEffect } from 'react';

import Character from './components/character';
import Question from './components/question';
import Intro from './components/intro';

import { DataManager } from "./data-manager";
import { Selectors } from './miners';

function App() {
    const [data, setData] = useState();
    const [question, setQuestion] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
          const initialData = await DataManager.loadData();
          setData(initialData);
        };
      fetchData();
      
    }, []);
  
    /* useEffect(() => {
        const initialQuestion = Selectors.getQuestionById(data, "p1");
        setQuestion(initialQuestion);
    }, [data]); */

  const onClickStart = () => {
    const initialQuestion = Selectors.getQuestionById(data, "p1");
    setQuestion(initialQuestion);
  }

  const onClickQuestion = (id) => {
      const optionQuestion = Selectors.getQuestionById(data, id);
      setQuestion(optionQuestion);
  };
  
  const introPage = <Intro onClick={onClickStart} />;
  const questionPage = <Question question={question} onClick={onClickQuestion} />;

  function showPage() {
      if (question) {
        return questionPage;
      } else {
        return introPage;
      }
    }

  

    return <> {showPage()}</>;
}

export default App;

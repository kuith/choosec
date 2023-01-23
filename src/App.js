import { useState, useEffect } from 'react';

import Character from './components/character';
import Question from './components/question';

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
  
    useEffect(() => {
        const initialQuestion = Selectors.getQuestionById(data, "p1");
        setQuestion(initialQuestion);
    }, [data]);
  
  return (
    <div>
      <Question question = {question} />
    </div>
  );
}

export default App;

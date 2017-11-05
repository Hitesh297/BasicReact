import React from 'react';
import ReactDOM from 'react-dom';
import LaunchButton from './components/launch';
import { getAllSurveys } from './actions/getSurveys_action';
import SurveyList from './components/survey_list';

var test = getAllSurveys();
test.then(function(res){
 console.log(res.data);
});

const App = ()=>{
  return (
    <div>
      <LaunchButton />
      <SurveyList />
   </div>
 );
}

ReactDOM.render(<App />,document.querySelector('.container'))

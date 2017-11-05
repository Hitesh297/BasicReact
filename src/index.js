import React from 'react';
import ReactDOM from 'react-dom';
import { getAllSurveys } from './actions/getSurveys_action';

var list;
var test = getAllSurveys();
test.then(function(res){
 console.log(res.data);
 list = res.data;
});

const App = ()=>{
  return (
    <div>
    {list}
   </div>
 );
}

ReactDOM.render(<App />,document.querySelector('.container'))

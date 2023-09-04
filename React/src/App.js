import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Button} from './Components/Buttons/ApnaButton.js';
import { PageHeader } from './Components/Header/Header';


function App() {

  var [click, setClick]= React.useState(0);

  var handleClick = function(){
    setClick(click+1);
  }

  return (<div className="page-container">
            <PageHeader 
              title="Boards"
              logo={<div>Logo</div>}
              profileIcon={"IS"} 
            ></PageHeader>

          </div>);
}

export default App;

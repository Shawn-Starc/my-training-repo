import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Button} from './Components/Buttons/ApnaButton.js';
import { PageHeader } from './Components/Header/Header';
import { Card } from './Components/Card/card';


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
            <Card
              header="Testing Card"
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            ></Card>
            <Card
              header="Ishaan Singh"
              description="Ishaan Singh is a good boy"
            ></Card>
            <Card
              header="Vishal Upadhayay"
              description="Vishal Upadhayay is in Jammu">
            </Card>
          </div>);
}

export default App;

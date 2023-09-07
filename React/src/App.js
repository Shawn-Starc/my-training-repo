import React from 'react';
import './App.css';
import { PageHeader } from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardPage } from './Pages/CardPage';
import { CreatePage } from './Pages/CreatePage/CreatePage';

function App() {

  return (<div className="page-container">
            <PageHeader 
              title="Boards"
              logo={<div>Logo</div>}
              profileIcon={"IS"} 
            ></PageHeader>

            <div className="app-full-container app-over-hidden">
            
              <BrowserRouter>
                  <Routes>
                      <Route exact path="/create" element={<CreatePage></CreatePage>}/>
                      <Route exact path="/" element={<CardPage></CardPage>}/>
                      
                  </Routes>
              </BrowserRouter>
            
            </div>

          </div>);
}

export default App;

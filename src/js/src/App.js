import React, {Component} from 'react';
import {BrowserRouter,
  Routes,
  Route} from 'react-router-dom'

import List from './Component/List'
import ProgramPage from './Component/ProgramPage';
//const getIndicatorIcon = () => <Icon type="loading" style={{fontSize:24}} spin />;

class App extends Component{

  render(){
    return(


      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProgramPage/>}/>
            <Route path='/:id' element={<List/>}/>
          </Routes>
        </BrowserRouter>

      </div>
      
  )
  
  
}}


export default App;

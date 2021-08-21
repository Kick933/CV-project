
import React,{ Component } from 'react'
import Info from './components/cvForm/Info';
import { Title } from './components/styledComponents';

class App extends Component {
  
  render(){
    return (
      <div>
      <Title>CV Generator</Title>
       <Info />
       </div>
    )
  }
}

export default App;

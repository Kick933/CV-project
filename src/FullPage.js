
import React,{ Component } from 'react'
import Info from './components/cvForm/Info';
import PreviewPage from './components/cvPreview/PreviewPage';
import { Title } from './components/styledComponents';

class FullPage extends Component{
  constructor(props){
      super(props)
      this.state={
            firstName: "Abhinav",
            lastName: "Shukla",
            title: "Senior Web Developer",
            address: "61,Professor Colony,Azadnagar, Jind",
            phoneNumber: "9876543210",
            email: "test@test.com",
            description: "I would hire someone who loves their work. And I love web development. I taught myself javascript because i love web development.",
            education: [
                {
                    university: "Example University",
                    degree: "B.Tech",
                    subject: "Mechanical",
                    from: "2010",
                    to: "2014",
                    city: "Mumbai"
                }
            ],
            experience: [
                {
                    position: "Junior Web Developer",
                    company: "Example Company",
                    from: "2015",
                    to: "2020",
                    city: "Mumbai"
                }
            ]
      }
    this.updateState = this.updateState.bind(this)
  }

    updateState(x){
      this.setState(x)
    }
  
  render(){
    return (
      <>
      <Title>CV Generator</Title>
       <Info print={this.updateState}/>
       <PreviewPage data={this.state}/>
       </>
    )
  }
}

export default FullPage;

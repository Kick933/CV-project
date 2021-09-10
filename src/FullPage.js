
import React,{ Component } from 'react'
import Info from './components/cvForm/Info';
import PreviewPage from './components/cvPreview/PreviewPage';
import { Title, PrintButton } from './components/styledComponents';
import ReactToPrint from 'react-to-print';

class FullPage extends Component{
  constructor(props){
      super(props)
      this.state={
        firstName: "",
        lastName: "",
        title: "",
        address: "",
        phoneNumber: "",
        email:"",
        education:[],
        experience: [],
        img: ""
      }
      this.baseState = this.state
    this.updateState = this.updateState.bind(this)
  }

    updateState(x){
      this.setState({
          firstName: x.firstName,
          lastName: x.lastName,
          title: x.title,
          address: x.address,
          email: x.email,
          phoneNumber: x.phoneNumber,
          education: [...x.education],
          experience: [...x.experience],
          img: x.img

        }
      )
    }
  
  render(){
    return (
      <>
      <Title>CV Generator</Title>
       <Info updateState={this.updateState}/>
        <PreviewPage data={this.state} ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => {
            return <PrintButton className="printBtn">Print this out! </PrintButton>;
          }}
          content={() => this.componentRef}
        />
       </>
    )
  }
}

export default FullPage;

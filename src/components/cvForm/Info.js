import React, {Component} from 'react'
import {LeftWrap,
    Section,
    GreenButton,
    OrangeButton,
    RedButton
} from '../styledComponents'
import Education from './Education'
import Experience from './Experience'
import PersonalInfo from './PersonalInfo'

class Info extends Component{
    constructor(){
        super()
        this.state={
            firstName: "First Name",
            lastName: "Last Name",
            title: "Title",
            address: "Address",
            phoneNumber: "Phone Number",
            email: "Email",
            description:"Description",
            education: [],
            experience: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.PersonalInfo = PersonalInfo.bind(this)
        this.addEducation = this.addEducation.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)
        this.saveEducation = this.saveEducation.bind(this)
        this.addExperience = this.addExperience.bind(this)
    }
    handleChange(event) {
        event.preventDefault();
        const { name,value } = event.target
        this.setState({
            [name] : value
        })
    }

    addEducation(x){
    this.setState(prevState => {
        return {
            education : prevState.education.concat([{
               ...x,
               identity: prevState.education.length
            }])
        }
    }
        )
}

    addExperience(x){
        this.setState(prevState => {
            return {
                experience : prevState.experience.concat([{
                ...x,
                identity: prevState.experience.length
                }])
            }
        }
            )
    }

    deleteEducation(event){
        const {id} = event.target
        this.setState(prevState =>{
           return { education: prevState.education.filter(a => a.identity !== parseInt(id))}
        })
    }

    saveEducation(x){
        const {identity} = x
        this.setState(prevState =>{
            return{
                ...prevState,
                education:[
                    ...prevState.education.filter(i => i.identity !== parseInt(identity)),
                    x
                ]
            }
        })
    }

    render(){
    return(
        <LeftWrap>
            <PersonalInfo data={this.state} handleChange={this.handleChange}></PersonalInfo>
            <Experience 
            addExperience={this.addExperience}
            data={this.state.experience}>
            </Experience>
            <Education
            data={this.state.education} 
            deleteEducation={this.deleteEducation} 
            saveEducation={this.saveEducation}
            addEducation={this.addEducation}>
            </Education>
            <Section>
            <GreenButton>Generate PDF</GreenButton>
            <OrangeButton>Load Example</OrangeButton>
            <RedButton>Reset</RedButton>
            </Section>
        </LeftWrap>
    )
    }
}


export default Info;
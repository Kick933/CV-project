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
            firstName: undefined,
            lastName: undefined,
            title: undefined,
            address: undefined,
            phoneNumber: undefined,
            email: undefined,
            description:undefined,
            education: [
                {
                  university: "GJU University",
                  city: "Hisar",
                  to: "2016",
                  from: "Present",
                  degree: "B.Sc Non-Medical",
                  subject: "Maths"  
                }
            ],
            experience: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        event.preventDefault();
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }
    // handleEducationChange(event){
    //     event.preventDefault();
    //     const {name, value, key, type} = event.target
        
    // }
    render(){
    return(
        <LeftWrap>
            <PersonalInfo data={this.state} handleChange={this.handleChange}></PersonalInfo>
            <Experience data={this.state.experience}></Experience>
            <Education education={this.state.education}></Education>
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
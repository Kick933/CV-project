import React, {Component} from 'react'
import {Wrapper,
    Section,
    GreenButton,
    OrangeButton,
    RedButton
} from '../styledComponents'
import Education from './Education'
import Experience from './Experience'
import PersonalInfo from './PersonalInfo'
import handleChange from './HandleChange'

class Info extends Component{
    constructor(props){
        super(props)
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
        this.exampleState = {
            firstName: "Abhinav",
            lastName: "Shukla",
            title: "Mr.",
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
        this.baseState = this.state
        this.handleChange = handleChange.bind(this)
        this.PersonalInfo = PersonalInfo.bind(this)
        this.addEducation = this.addEducation.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)
        this.saveEducation = this.saveEducation.bind(this)
        this.addExperience = this.addExperience.bind(this)
        this.saveExperience = this.saveExperience.bind(this)
        this.deleteExperience = this.deleteExperience.bind(this)
        this.print = this.print.bind(this)
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
           return { education: prevState.education.filter(a => a.identity !== parseInt(id)).map((x,index) => x = {...x,identity:index})}
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

    saveExperience(x){
        const {identity} = x
        this.setState(prevState =>{
            return{
                ...prevState,
                experience:[
                    ...prevState.experience.filter(i => i.identity !== parseInt(identity)),
                    x
                ]
            }
        })
    }

    deleteExperience(event){
        const {id} = event.target
        this.setState(prevState =>{
           return { experience: prevState.experience.filter(a => a.identity !== parseInt(id)).map((x,index) => x = {...x,identity:index})}
        })
    }
    print(e){
        this.props.updateState(this.state)
    }

    render(){
    return(
        <Wrapper>
            <PersonalInfo data={this.state} handleChange={this.handleChange}></PersonalInfo>
            <Experience 
            addExperience={this.addExperience}
            data={this.state.experience}
            saveExperience={this.saveExperience}
            deleteExperience={this.deleteExperience}>
            </Experience>
            <Education
            data={this.state.education} 
            deleteEducation={this.deleteEducation} 
            saveEducation={this.saveEducation}
            addEducation={this.addEducation}>
            </Education>
            <Section>
            <GreenButton onClick={this.print}>Generate CV</GreenButton>
            <OrangeButton
            onClick={() => this.setState(this.exampleState)}>Load Example</OrangeButton>
            <RedButton
            onClick={() => this.setState(this.baseState)}>Reset</RedButton>
            </Section>
        </Wrapper>
    )
    }
}


export default Info;